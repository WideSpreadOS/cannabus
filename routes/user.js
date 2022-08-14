const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { ensureAuthenticated } = require('../config/auth');
require('../config/passport')(passport);
const LocalStrategy = require('passport-local').Strategy;

/* Models */
const User = require('../models/User');

passport.use(new LocalStrategy(
    function (email, password, done) {
        User.findOne({ email: email }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
        });
    }
))

// Login Page
router.get('/login', async (req, res) => {
    const currentUser = null
    if (!req.user) {
        res.render('login', { currentPageTitle: 'Login', currentUser });
    } else {
        res.render('login', { currentPageTitle: 'Login', currentUser });
    }
})
// Register Page
router.get('/register', (req, res) => {
    const currentUser = null
    res.render('register', { currentPageTitle: 'Register', currentUser });
})

// Register Handle
router.post('/register', (req, res) => {
    const { fname, lname, user_name, dob, email, password, password2 } = req.body;
    let errors = [];
    console.log(req.body)
    // Check required fields
    if (!fname || !lname || !user_name || !dob || !email || !password || !password2) {
        errors.push({ msg: 'Please fill in all fields' })
    }
    // Check passwords match
    if (password !== password2) {
        errors.push({ msg: 'Passwords do not match' })
    }

    // Check password length
    if (password.length < 6) {
        errors.push({ msg: 'Password should be at least 6 characters' })
    }

    if (errors.length > 0) {
        res.render('register', {
            errors,
            fname,
            lname,
            user_name,
            dob,
            email,
            password,
            password2
        });
    } else {
        // Validation Pass
        User.findOne({ email: email })
            .then(user => {
                if (user) {
                    // User Exists
                    errors.push({ msg: 'Email is already registered' })
                    res.render('register', {
                        errors,
                        fname,
                        lname,
                        user_name,
                        dob,
                        email,
                        password,
                        password2
                    });
                } else {
                    const newUser = new User({
                        fname,
                        lname,
                        email,
                        user_name,
                        dob,
                        password
                    });
                    bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        // Set password to hashed
                        newUser.password = hash;
                        // Save user
                        newUser.save()
                            .then(user => {
                                console.log('user: ', user)
                                req.flash('success_msg', 'You are now registered and can log in');
                                res.render('login', { currentPageTitle: 'Login' });
                            })
                            .catch(err => console.log(err));

                    }))
                }
            })
            .catch();
    }
})


// Login Handle
// router.post('/login', (req, res, next) => {
//     passport.authenticate('local', {
//         successRedirect: '/user/dashboard',
//         failureRedirect: '/user/login',
//         failureFlash: true
//     })(req, res, next);
// });
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/user/dashboard',
        failureRedirect: '/user/login',
        failureFlash: true
    })(req, res, next);
});

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/user/login')
});

router.get('/dashboard', ensureAuthenticated, async (req, res) => {
    const user = req.user;
    const userId = req.user.id;
    const companies = await Company.find();
    const orders = await Cart.find({ "for_user": userId })
    res.render('user/dashboard', { page: 'Dashboard', companies, user, orders });
});
module.exports = router;
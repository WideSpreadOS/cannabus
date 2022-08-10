const express = require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const bodyParser = require('body-parser')
const path = require('path')
const passport = require('passport')
const flash = require('connect-flash')
const session = require('express-session')
const crypto = require('crypto');




const app = express()

const cors = require("cors")
app.use(express.json())
app.use(
    cors({
        origin: "http://localhost:5500",
    })
)
// const db = require('./config/keys').MongoURI;
// // Connect to MongoDB
// mongoose.connect(db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => console.log('MongoDB Connected...'))
//     .catch(err => console.log(err));

// const Product = require('./models/Product');



// Middleware

app.use(bodyParser.json());

// Static
app.use(express.static('public'));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Bodyparser
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));




// Routes

app.use('/', require('./routes/index'));
app.use('/admin', require('./routes/admin'));
app.use('/canna-girls', require('./routes/canna-girls'));
app.use('/schedule', require('./routes/schedule'));
// app.use('/user', require('./routes/user'));
app.use('/checkout', require('./routes/checkout'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started on ${PORT}`))
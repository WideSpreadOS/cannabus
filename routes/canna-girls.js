const express = require('express');
const router = express.Router();

const CannaGirl = require('../models/CannaGirl')


// Welcome Page
router.get('/', async (req, res) => {
    // const cannaGirls = await CannaGirl.find()
    const header = 'Meet the CannaGirls!';
    const textBox = 'Come get to know a little bit about your local CannaGirls taking care of every customer in their day to day adventures bringing a great experience at every bus stop! Also, if you are interested in having a private party with them, feel free to book them for any CannaBus service package! (Party Bus, Private Parties, Massage, Golf Caddy, Events)';
    const background = '/images/products/2.png'
    res.render('canna-girls/home', { title: 'CannaGirls Home', text_box_header: header, text_box: textBox, background  })
})

// Add new CannaGirl Page
router.post('/new-girl', async (req, res) => {
    const newData = req.body
    const newCannaGirl = new CannaGirl(newData)
    newCannaGirl.save()
    
    res.redirect('/canna-girls/home')
})





module.exports = router;
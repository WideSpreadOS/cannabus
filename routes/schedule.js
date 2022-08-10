const express = require('express');
const router = express.Router();

const CannaGirl = require('../models/CannaGirl')


// Welcome Page
router.get('/', async (req, res) => {
    // const cannaGirls = await CannaGirl.find()
    const header = 'CannaBus Locations';
    const textBox = 'Find out where we will be next!';
    const background = ''
    res.render('schedule/home', { title: 'CannaBus Schedule', text_box_header: header, text_box: textBox, background })
})

// Add new CannaGirl Page
router.post('/new-route', async (req, res) => {
    const newData = req.body
    // const newCannaGirl = new CannaGirl(newData)
    // newCannaGirl.save()

    res.redirect('/schedule')
})





module.exports = router;
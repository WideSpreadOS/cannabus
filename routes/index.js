const express = require('express');
const router = express.Router();



// Welcome Page
router.get('/', async (req, res) => {
    res.render('landing', {title: 'CannaBus'})


})

// About Page
router.get('/about', async (req, res) => {
    res.render('about', {title: 'About CannaBus'})


})

// Contact Page
router.get('/contact', async (req, res) => {
    res.render('contact', {title: 'Contact CannaBus'})


})

// Bus Schedule Page
router.get('/schedule', async (req, res) => {
    res.render('schedule', {title: 'CannaBus Schedule'})


})

// Products Page
router.get('/products', async (req, res) => {
    res.render('products', {title: 'CannaBus Products'})


})


module.exports = router;
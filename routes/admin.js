const express = require('express');
const router = express.Router();



// Welcome Page
router.get('/', async (req, res) => {
    res.render('admin/home', { title: 'CannaBus Admin' })
})


// Bus Schedule Page
router.get('/schedule', async (req, res) => {
    res.render('schedule', { title: 'CannaBus Schedule' })


})

// Products Page
router.get('/products', async (req, res) => {
    res.render('admin/products', {
        title: 'Admin Products'
    },
    )


})


module.exports = router;
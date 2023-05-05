const express = require('express')
const router = express.Router()

const products = [
    {
        id: 1,
        tittle: 'Computador Gamer',
        price: 5500.00,
    },

    {
        id: 2,
        tittle: 'Celular Gamer',
        price: 2500.00,
    },

    {
        id: 3,
        tittle: 'SSD Nova Geração',
        price: 1400.00
    },

]

router.get('/products/:id', (req, res) => {
    const product = products[parseInt(req.params.id) -1]
    res.render('products', {product})
})
router.get('/', (req, res) => { 
    res.render('home', {products})
})


module.exports = router
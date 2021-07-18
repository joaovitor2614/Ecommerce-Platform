const express = require('express');
const normalizeUrl = require('normalize-url')
const {body, checkSchema, validationResult, check} = require('express-validator');

// models
const Product = require('../models/Product');


// schema
const productSchema = require('../middlewares/validation/productSchema');
const jwtVerify = require('../middlewares/jwtVerify')

// create router
const router = express.Router()

//method POST /api/products
//desc register new product
// Private
router.post('/', jwtVerify, checkSchema(productSchema), async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    let { productImage } = req.body;
    req.body.productImage = normalizeUrl(productImage, {forceHttps: true});
   
    const newProduct = new Product({
        user: req.user.id,
        ...req.body
    })


    await newProduct.save();
    res.json(newProduct);


});

module.exports = router;
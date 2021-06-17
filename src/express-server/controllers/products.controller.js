const mongoose = require('mongoose')
const Product = require('../models/products.model')



exports.getProducts = (req, res) => {
    Product.find()
        .then((result) => {
            console.log(result)
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
}

exports.getProductById = (req, res) => {
        
        const paramId =  parseInt(req.params.productid)
        //console.log(paramId)
        Product.find({productid : paramId})
        .then((result) => {
            
            
            console.log(result)
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    


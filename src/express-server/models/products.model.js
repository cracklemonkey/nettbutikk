const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const productSchema = new Schema({
    productid: Number,
    title: String,
    body: String,
    price: Number
}, { collection : 'products' })

const Product = mongoose.model('products', productSchema);
module.exports = Product;
const { getProducts, getProductById, addProducts} = require("../controllers/products.controller.js")

module.exports = (app) => {
    app.get('/products', getProducts),
    app.get('/products/:productid', getProductById)
    

}


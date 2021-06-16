const { getProducts, getProductById} = require("../controllers/products.controller.js")

module.exports = (app) => {
    app.get('/products', getProducts),
    app.get('/products/:id', getProductById)
}


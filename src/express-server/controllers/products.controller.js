let products =  [
    {"id": 1, "title": "Stol", "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto" ,"price": 200},
    {"id": 2, "title": "Bord","body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto" ,"price": 400},
    {"id": 3, "title": "Datamaskin","body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto" ,"price": 10000},
    {"id": 4, "title": "Flaske", "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto" ,"price": 10},
    {"id": 5, "title": "Pute","body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto" ,"price": 180},
    {"id": 6, "title": "Skap","body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto" ,"price": 3500},
    {"id": 7, "title": "Hestesko", "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto" ,"price": 50},
    {"id": 8, "title": "Blyant","body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto" ,"price": 5},
    {"id": 9, "title": "Hansker","body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto" ,"price": 152},
    {"id": 10, "title": "Briller", "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto" ,"price": 123},
    {"id": 11, "title": "Headsett","body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto" ,"price": 1800},
    {"id": 12, "title": "Stereoanlegg","body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto" ,"price": 5200},
]

exports.getProducts = (req, res) => {
    res.send(products)
}

exports.getProductById = (req, res) => {
        const paramId = req.params.id
    
        const product = products.find(item => item.id === parseInt(paramId))
    
        if(!product) {
            res.status(404).send(`We could not find item with id ${paramId}`)
        } else {
            res.send(product)
        }
    }
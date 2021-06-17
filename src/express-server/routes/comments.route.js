const { getComments, getCommentsById, addComment} = require("../controllers/comments.controller.js")

module.exports = (app) => {
    app.get('/comments', getComments)
    app.get('/comments/:commentid', getCommentsById)
    app.post('/comments/:commentid', addComment)
    
}


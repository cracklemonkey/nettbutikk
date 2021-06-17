const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    commentid: Number,
    body: String
    
}, { collection : 'comments' })

const Comment = mongoose.model('comments', commentSchema);
module.exports = Comment;
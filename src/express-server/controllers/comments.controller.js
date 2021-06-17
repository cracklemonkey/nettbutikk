const mongoose = require('mongoose')
const Comment = require('../models/comments.model')

exports.getComments = (req, res) => {
    Comment.find()
    .then((result)=> {
        console.log(result)
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.getCommentsById = (req, res) => {
    
    const paramId = parseInt(req.params.commentid)
    
    console.log(req.body)
    Comment.find({commentid: paramId})
        .then((result) => {
            console.log(result)
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    exports.addComment = (req, res) => {
        console.log(parseInt(req.params.commentid))
        const comment = new Comment({
            
            body: req.body.body,
            commentid: parseInt(req.params.commentid),
            
        });

        comment.save()
        .then((result) =>{
            console.log(result)
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        }
        )
    }


/*exports.addComment = (req, res) => {
    const comment = req.body
    
    if (!comment) {
        res.status(405).send('Missing comment data')
    } else {
        comments.push(comment)
        res.send(comment)
    }
}*/


let comments =  [
    {"commentid": 1, "body": "hei"}, 
    {"commentid": 1, "body": "halla"},
    {"commentid": 1, "body": "på"},
    {"commentid": 4, "body": "bra"},
    {"commentid": 4, "body": "suger"},
    {"commentid": 3, "body": "skam dere"},
    {"commentid": 2, "body": ":)"},
    {"commentid": 2, "body": "Bads"},
    {"commentid": 1, "body": "cvxker"},
    {"commentid": 6, "body": "Brxcer"},
    
]

exports.getComments = (req, res) => {
    res.send(comments)
}

exports.getCommentsById = (req, res) => {
    const paramId = req.params.commentid
    console.log(comments)
    console.log(req.params.commentid)
    const newComments = comments.filter(item => item.commentid == parseInt(paramId))
    console.log("s",newComments)

    if(!newComments) {
        res.status(404).send(`We could not find item with id ${paramId}`)
    } else {
        res.send(newComments)
    }
}

exports.addComment = (req, res) => {
    const comment = req.body
    console.log(req.body)
    if (!comment) {
        res.status(405).send('Missing comment data')
    } else {
        comments.push(comment)
        res.send(comment)
    }
}
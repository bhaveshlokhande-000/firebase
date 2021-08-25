const insert = require("../services/blogServices").insert
const firebase = require("../services/userServices").getInstance()

module.exports = function (req, res) {
    let title = req.body.title
    let body = req.body.body
    let image = req.file.filename
    insert(title, body, image, req.query.guid, req.query.displayName)
    res.status(200).send({
        message: "record insert"
    })
}

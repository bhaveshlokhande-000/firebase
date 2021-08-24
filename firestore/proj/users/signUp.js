const createUser = require("../services/userServices").createUser
module.exports = function (req, res) {
    let email = req.body.email
    let password = req.body.password
    let name = req.body.name
    createUser(email, password, name).catch(error => res.status(400).send({
        message: "sigin failed",
        error: error.message
    })).then(user => res.status(200).send(user))
}

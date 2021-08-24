const firebase = require("../services/userServices").getInstance()

function userAuth(req, res, next) {
    const user = firebase.auth().currentUser;
    if (user!=null || req.query.guid!=0){
        next()
    } else {
        console.log("chla")
        res.status(400).send({
            message: "login required"
        })
    }
}

module.exports = userAuth
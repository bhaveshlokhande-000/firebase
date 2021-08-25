const firebase = require("../services/userServices").getInstance()

module.exports = function (req, res) {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        res.status(200).send({
            message: "signout",
        })

    }).catch((error) => {
        res.send({
            message: "signout",
            error:error.message
        })

    });
}

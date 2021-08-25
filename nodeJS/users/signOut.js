const firebase = require("../services/userServices").getInstance()

module.exports = function (req, res) {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        res.status(200).send({
            message: "signOut",
        })

    }).catch((error) => {
        res.send({
            message: "signOut",
            error:error.message
        })

    });
}

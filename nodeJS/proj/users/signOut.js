const firebase = require("../services/userServices").getInstance()

module.exports = function (req, res) {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log("signout", req.query)
        res.status(200).send({
            message: "signout",
            googleSignOut: req.query?.guid!=0 ? true : false
        })

    }).catch((error) => {
        console.log("signout", error)
        res.send("signout error")

    });
}
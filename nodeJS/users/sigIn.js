const firebase = require("../services/userServices").getInstance()

module.exports = function (req, res) {
    let email = req.body.email
    let password = req.body.password
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            res.send({
                message:"login successfull"
            })
        })
        .catch((error) => {
            res.status(400).send({
                message: "login failed",
                error: error.message
            })

        });

}

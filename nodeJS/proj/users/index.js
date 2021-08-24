const express = require("express")
const userAuth = require("../middleware/userAuth")
const router = express.Router()

module.exports = () => {

    router.post("/signin", require("./sigIn"))
    router.post("/signup", require("./signup"))
    router.get("/signout", userAuth, require("./signOut"))
    return router
}
const express = require("express")
const file_middleware = require("../middleware/fileUpload")
const userAuth = require("../middleware/userAuth")

const router = express.Router()

module.exports = () => {

    router.get("/", userAuth, require("./get"))
    router.get("/blog", userAuth, require("./getCurrentUserBlogs"))
    router.post("/insert", userAuth, file_middleware, require("./post"))

    return router
}
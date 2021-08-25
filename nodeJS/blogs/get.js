const getAllBlogs = require("../services/blogServices").getAllBlogs

module.exports = function (req, res) {
    getAllBlogs().then(data => res.send(data))
}

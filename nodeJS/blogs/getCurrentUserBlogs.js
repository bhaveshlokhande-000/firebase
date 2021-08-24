const getBlogs = require("../services/blogServices").getBlogs

module.exports = function (req, res) {
    getBlogs().then(data => res.send(data))
}

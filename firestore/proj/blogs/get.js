const getAllBlogs = require("../services/blogServices").getAllBlogs

module.exports = function (req, res) {
    getAllBlogs(req.query.guid).then(data => res.send(data))
}

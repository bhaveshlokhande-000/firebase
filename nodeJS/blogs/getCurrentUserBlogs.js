const getBlogs = require("../services/blogServices").getBlogs

module.exports = function (req, res) {
    getBlogs(req.query.guid).then(data => res.send(data))
}

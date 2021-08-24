const express = require("express")
const bodyParser = require("body-parser");
const cors = require('cors');
require("dotenv").config()

const users = require("./users/index")()
const blogs = require("./blogs/index")()

const app = express();

app.use(cors())

app.use(express.static("./public/"))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

port = process.env.PORT || 3000
console.log(process.env.PORT)

app.listen(3000, function (req, res) {
    console.log("server started on port " + port);
})


app.use("/", users)

app.use("/blogs", blogs)

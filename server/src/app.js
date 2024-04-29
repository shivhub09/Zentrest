const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors())

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))
// app.use(cookierParser())

// routes 
const router = require("./routes/user.routes");
const postRouter = require("./routes/post.routes");

// routes declaration

app.use("/api/v1/users", router)
app.use("/api/v1/posts", postRouter)

module.exports = app
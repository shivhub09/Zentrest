const express = require('express')
const app = express()


// app.use(cors(
//     {
//         origin: process.env.CORS_ORIGIN,
//         credentials: true
//     }
// ))


app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))
// app.use(cookierParser())




// routes 
// const userRoute = require("./routes/user.routes");

// routes declaration

// app.use("/api/v1/users", userRoute)


module.exports = app
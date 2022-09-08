const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const userForm = require("./routes/form")
const userPost = require("./routes/postView")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use("/", userForm)
app.use("/", userPost)

let mongoDB = process.env.DB
mongoose.connect(mongoDB, () => {
    console.log("Database connected successfully")
}, (err) => {
    console.log(err)
})

let port = process.env.PORT || 3005
app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Server started running at port:${port}`)
    }
})

app.get("/home", (req, res) => {
    res.status(200).send("Backend Works")
})
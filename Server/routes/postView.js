const express = require("express")
const postModal = require("../modals/postSchema");

const router = express.Router()

router.get("/postView", (req, res) => {
    postModal.find().then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(400).send(err)
    })
});

module.exports = router;
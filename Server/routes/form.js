const express = require("express")
const postModal = require("../modals/postSchema")

const router = express.Router()

router.post("/form", (req, res) => {
    postModal.create({ name: req.body.name, location: req.body.location, image: req.body.image, description: req.body.description }).then((data) => {
        res.status(200).send(data)
        console.log(data)
    }).catch((err) => {
        res.status(400).send(err)
    })
});

module.exports = router;
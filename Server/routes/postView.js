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

router.put("/postView/update", async (req, res) => {
    let like = await postModal.find({ _id: req.body.id })
    // console.log(req.body)
    like = like[0].likes + 1
    await postModal.updateOne({ _id: req.body.id }, { likes: like })

    res.status(200).send("likes updated")

})
module.exports = router;

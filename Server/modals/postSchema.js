const mongoose = require("mongoose");

let today = new Date()
let currDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: { type: String, required: true },
    image: {
        type: String,
        required: true
    },
    likes: { type: Number, default: 1, required: true },
    date: { type: String, default: currDate },
    description: { type: String, required: true }
});

const postModal = mongoose.model("/userPost", postSchema);
module.exports = postModal;
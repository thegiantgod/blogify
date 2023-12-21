const mongoose = require('mongoose');
//const myValidator = require('validator');

const PostSchema = new mongoose.Schema({
    "title": {
        type: String,
    },
    "user": { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    "content": {
        type: String,
    },
    "picture": {
        type: String
    }
});

module.exports = mongoose.model('post', PostSchema);

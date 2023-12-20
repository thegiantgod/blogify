const mongoose = require('mongoose');
//const myValidator = require('validator');

const PostSchema = new mongoose.Schema({
    "title": {
        type: String,
    },
    "userId": {
        type: String
    },
    "content": {
        type: String,
    },
    "picture": {
        type: String
    }
});

module.exports = mongoose.model('post', PostSchema);

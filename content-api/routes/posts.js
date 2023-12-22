var express = require('express');
var router = express.Router();
const PostModel = require("../models/Post");
const isAuthenticated = require('../middlewares/isAuthenticated');

/* GET users listing. */
router.get("/", isAuthenticated, async function(req, res, next) {
  const posts = await PostModel.find({}, { title: true, userId: true, content: true, picture: true });

  res.status(200).json(posts);
});

router.get("/:id", isAuthenticated, async function(req, res) {
  try {
    const post = await PostModel.findById(req.params.id);
    res.status(200).json(post);
  } catch(exception) {
    res.status(404).send("Not found");
  }
})

router.post("/", isAuthenticated, async function(req, res) {
  const post = req.body;
  let createdPost = new PostModel({ post });
  createdPost = await PostModel.create(post);
  res.status(201).json(createdPost);
});

router.put("/:id", isAuthenticated, async function(req, res) {
  const updatedPost = await PostModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedPost);
});

router.delete("/:id", isAuthenticated, async function(req, res) {
  try{
    let post = await PostModel.findById(req.params.id);
    if (!post) {
      res.status(404).send();
    }
    PostModel.deleteOne({ _id: req.params.id })
    res.status(200).send();
  } catch(exception) {
    res.status(500).send("Not found");
  }
});

module.exports = router;

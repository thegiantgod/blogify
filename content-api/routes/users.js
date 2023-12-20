var express = require('express');
var router = express.Router();
const UserModel = require("../models/User");
const mongoose = require('mongoose');

/* GET users listing. */
router.get("/", async function(req, res, next) {
  const users = await UserModel.find({}, { pseudo: true, role: true, email: true });

  res.status(200).json(users);
});

router.get("/:id", async function(req, res) {
  const user = await UserModel.findById(req.params.id);
  res.status(200).json(user);
})

router.post("/", async function(req, res) {
  const user = req.body;
  let createdUser = new UserModel({ user });
  createdUser = await UserModel.create(user);
  res.status(201).json(createdUser);
});

router.put("/:id", async function(req, res) {
  const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedUser);
});

router.delete("/:id", async function(req, res) {
  let user = await UserModel.findById(req.params.id);
  if (!user) {
    res.status(404).send();
  }
  UserModel.deleteOne({ _id: new mongoose.Types.ObjectId(req.params.id) })
  res.status(200).send();
});

module.exports = router;

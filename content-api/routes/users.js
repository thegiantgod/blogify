var express = require('express');
var router = express.Router();
const UserModel = require("../models/User");
const passport = require("../passport");
const isAuthenticated = require('../middlewares/isAuthenticated');

/* GET users listing. */
router.get("/", async function(req, res, next) {
  const users = await UserModel.find({}, { pseudo: true, role: true, email: true });

  res.status(200).json(users);
});

router.get("/:id", isAuthenticated, async function(req, res) {
  try {
    const user = await UserModel.findById(req.params.id);
    res.status(200).json(user);
  } catch(exception) {
    res.status(404).send("Not found");
  }
})

router.post("/", async function(req, res) {
  const user = req.body;
  let createdUser = new UserModel({ user });
  createdUser = await UserModel.create(user);
  res.status(201).json(createdUser);
});

router.put("/:id", isAuthenticated, async function(req, res) {
  const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedUser);
});

router.delete("/:id", isAuthenticated, async function(req, res) {
  try{
    let user = await UserModel.findById(req.params.id);
    if (!user) {
      res.status(404).send();
    }
    UserModel.deleteOne({ _id: req.params.id })
    res.status(200).send();
  } catch(exception) {
    res.status(500).send("Not found");
  }
});

router.post("/login", passport.authenticate('local'), function(req, res, next) {
  res.status(200).send();
});

router.get("/logout", function(req, res) {

  req.session.destroy();
  req.logout();
  res.send("Logged out !");
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.status(200).send('respond with a resource');
});

router.get("/:id", function(req, res) {
  res.status(200).send(req.params.id);
})

router.post("/", function(req, res) {
  res.status(201).send();
});

router.put("/", function(req, res) {
  res.status(200).send();
});

router.delete("/", function(req, res) {
  res.status(200).send();
});

module.exports = router;

var express = require('express');
var router = express.Router();
var request = require('request');

router.get("/", function(req, res) {
    res.render("index");
});

module.exports = router;
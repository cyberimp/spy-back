/**
 * Created by kinzo on 17.08.2016.
 */
var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    //TODO: check uid and give name
    res.json({ user: 'alice' });
});

module.exports = router;

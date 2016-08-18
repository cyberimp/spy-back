/**
 * Created by kinzo on 17.08.2016.
 */
var express = require('express');
var router = express.Router();

var multer  = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //TODO:paths for uid
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

var upload = multer({ storage: storage });


router.post('/', upload.single('photo'), function(req, res, next) {
    var name = res.file.originalname;
    var type = res.file.mimetype;
    console.log('name:'+name+' type:'+type);
    res.send('name:'+name+' type:'+type);
});

module.exports = router;

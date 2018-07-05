'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/demo', function (req, res) {
    /*var userName = req.queryResult.username;
    var phoneNo = req.queryResult.phone_no;
    var email = req.queryResult.email_add;
    var aadhar = req.queryResult.aadhar;
    */
    var userName = req.queryResult.parameters.param.username;
    var phoneNo = req.queryResult.parameters.param.phone_no;
    var email = req.queryResult.parameters.param.email_add;
    var aadhar = req.queryResult.parameters.param.aadhar;

    return res.json({
        text : "Nice to know your details"
    })
});

module.exports = router;

﻿'use strict';
var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");

//var pg = require("pg");
const restService = express();

restService.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  restService.use(bodyParser.json());
/* GET home page. */
restService.post('/demo', function (req, res) {
    /*var userName = req.queryResult.username;
    var phoneNo = req.queryResult.phone_no;
    var email = req.queryResult.email_add;
    var aadhar = req.queryResult.aadhar;
    */
    
    var userName = req.body;
    console.log(userName)
   /* var phoneNo = req.body;
    var email = req.body.email_add;
    var aadhar = req.body.aadhar;
    console.log("request params", req)*/
    return res.json({
        fulfillmentText:"Nice to know your details"
     });
    });
    restService.listen(process.env.PORT || 3000, function() {
        console.log("Server up and listening");
    });
    





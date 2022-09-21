const express = require('express');
const bodyParser = require('body-parser');
const {mongoose}=require ('./db.js');
var employeesController = require('./controller/employeesc.js');
var app = express();
app.use(bodyParser.json());

app.listen(4000,()=>console.log("server is listing on port no 4000")); 
app.use('./Employees',employeesc )
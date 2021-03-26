const express =require('express');
const bodyParser = require('body-parser');

const  { mangoose}= require('./db.js');
var app=express();
app.arguments(bodyParser.json());
app.listen(3000,()=> console.log('server started at port:3000'));
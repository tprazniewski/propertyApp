const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const connection = require('./db/mySql')
const dotenv = require('dotenv');
const apiProperties  = require('./routers/api/properties')
const users = require('./routers/api/users')
require('dotenv').config();
const PORT = process.env.PORT || '3002';
// const CORS = ((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*'); // or instead of * use a for specific domain
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, ');
//   res.setHeader('Access-Control-Allow-Credentials', false); // don't allow cookies

//   next();
// });
const cors = require('cors')
app.use(cors());



//thanks to the below line of code We are able to use req.body later on when using method POST
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
// app.use(CORS); // CORS policy
// app.use(express.json({limit: '1mb'}))
app.use('/api/properties', apiProperties);
app.use('/api/users', users);

app.listen(PORT, () => {
  console.log(`Server started on port:5001`)
})
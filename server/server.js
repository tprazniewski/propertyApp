const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const connection = require('./db/mySql')
const dotenv = require('dotenv');
const apiProperties  = require('./routers/api/properties')
const CORS = require('./helpers/_cors')
require('dotenv').config();
const PORT = process.env.PORT || '3002';


//thanks to the below line of code We are able to use req.body later on when using method POST
app.use(bodyParser.urlencoded({extended: false}))
app.use(CORS)
app.get('/api/users', (req,res) => {
  res.json({"user": ["user1", "user2", "usere3"]})
})
app.use('/api/properties', apiProperties);

app.listen(PORT, () => {
  console.log(`Server started on port:5001`)
})
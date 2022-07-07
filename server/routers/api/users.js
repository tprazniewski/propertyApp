const express = require('express');
const router = express.Router();
const connection = require('../../db/mySql')
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
  console.log("get")
  try {
    const sqlQuery = 'SELECT * FROM users';
    const rows = await connection.query(sqlQuery);
    delete rows.meta;
    res.status(200).json(rows).end();
    
  } catch (error) {
    res.status(400).send(error.message)
  }
});
router.get('/:id', async (req, res) => {
  try {
    const sqlQuery = `SELECT * FROM users where id = ?`;
    const rows = await connection.query(sqlQuery, [req.params.id]);
    delete rows.meta;
    res.status(200).json(rows).end();
    
  } catch (error) {
    res.status(400).send(error.message)
  }
});





router.post('/', async (req, res) => {
  
  const {name, surname, dob, email, phone} = req.body

  console.log(req.body)
  console.log(req.body.name)
  try {
    const sqlQuery2=  `INSERT INTO users (name, surname, dob, email, phone)
    VALUES 
    ('${name}', '${surname}', '${dob}', '${email}', '${phone}' )`
    
    const sqlQuery = 'SELECT * FROM users';
    const rows = await connection.query(sqlQuery2);
    res.status(200).json({ response: 'Added'}).end();
    
  } catch (error) {
    res.status(400).send(error.message)
  }
  
  // console.log((req.body))
  // console.log("post ")
  // res.json({ test: 'Hello'});
});
router.put('/:id`', (req, res) => {
  res.send('userPut').status(200).end();
});
router.delete('/:id`', (req, res) => {
  
  res.send('userDlete').status(200).end();
});

module.exports = router;
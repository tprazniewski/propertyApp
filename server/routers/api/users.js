const express = require('express');
const router = express.Router();
const connection = require('../../db/mySql')
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
  try {
    const sqlQuery = 'SELECT * FROM users';
    const rows = await connection.query(sqlQuery);
    delete rows.meta;
    res.status(200).json(rows).end();
    
  } catch (error) {
    res.status(400).send(error.message)
  }});
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
router.post('/', (req, res) => {
  res.send('userPost').status(200).end();
});
router.put('/:id`', (req, res) => {
  res.send('userPut').status(200).end();
});
router.delete('/:id`', (req, res) => {
  res.send('userDlete').status(200).end();
});

module.exports = router;
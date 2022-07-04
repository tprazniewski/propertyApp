const express = require('express');
const router = express.Router();
const connection = require('../db/mySql')
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
  res.json('usersGet').status(200).end();
});
router.get('/:id', async (req, res) => {
  res.json('userGet').status(200).end();
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
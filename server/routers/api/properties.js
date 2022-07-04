const express = require('express');
const router = express.Router();
const connection = require('../../db/mySql')


router.get('/', async (req, res) => {
  try {
    const sqlQuery = 'SELECT * FROM properties';
    const rows = await connection.query(sqlQuery);
    delete rows.meta;
    res.status(200).json(rows).end();
    
  } catch (error) {
    res.status(400).send(error.message)
  }

});
router.get('/:id', async (req, res) => {
 
});
router.post('/', (req, res) => {
});
router.put('/:id`', (req, res) => {
});
router.delete('/:id`', (req, res) => {
});

module.exports = router

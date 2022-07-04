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
  try {
    const sqlQuery = `SELECT * FROM properties where id = ?`;
    const rows = await connection.query(sqlQuery, [req.params.id]);
    delete rows.meta;
    res.status(200).json(rows).end();
    
  } catch (error) {
    res.status(400).send(error.message)
  }

});
router.post('/', async (req, res) => {
  try {
    const sqlQuery = ` 
    INSERT INTO properties (title, description, price, type, location, img, kind)
    VALUES
    ('Pretty cheap House for sale', 'This flat is pretty small and pretty cheap', 12345, 'For Sale', 'Stockholm', '', 'House' )
    `
    const rows = await connection.query(sqlQuery);
    // delete rows.meta;
    console.log(rows)
    res.status(200).json('You added a new property').end();
    
  } catch (error) {
    res.status(400).send(error.message)
  }


});
router.put('/:id`', (req, res) => {
  console.log("put entered")
  res.status(200).json('entered put').end();

});

router.delete('/:id`', async(req, res) => {
  console.log("weszlo")
  res.status(200).json('delete weszlo').end();

  // try {
  //   console.log(req.params.id)
  //   const sqlQuery = 'DELETE FROM properties where id = ?';
  //   const rows = await connection.query(sqlQuery, [req.params.id]);
  //   delete rows.meta;
  //   res.status(200).json(rows).end();
    
  // } catch (error) {
  //   res.status(400).send(error.message)
  // }
});

module.exports = router

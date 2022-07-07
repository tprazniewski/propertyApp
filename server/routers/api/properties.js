const express = require('express');
const router = express.Router();
const connection = require('../../db/mySql')

router.get('/', async (req, res) => {
  let location = req.query.location
  let type = req.query.type

  console.log(location)
  console.log(type)
  try {
    const sqlQuery = location==undefined ?  'SELECT * FROM properties' : `SELECT * FROM properties where location = '${location}' and type=${type}`;
    const rows = await connection.query(sqlQuery);
    delete rows.meta;
    console.log(rows)
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

  const {title, description, price, type, location, img, kind, property_id} = req.body
  console.log(req.body)

  try {
    const sqlQuery = ` 
    INSERT INTO properties (title, description, price, type, location, img, kind, property_id)
    VALUES
    ('${title}', '${description}', 777, '${type}', '${location}', '${imgs}', '${kind}', 2 )
    `
    const rows = await connection.query(sqlQuery);
    res.status(200).json({ response: 'Added'}).end();
    
  } catch (error) {
    res.status(400).send(error.message)
  }


});
router.put('/:id', (req, res) => {
  console.log("put entered")
  res.status(200).json('entered put').end();

});

router.delete('/:id', async(req, res) => {
  console.log("weszlo")
  // res.status(200).json('delete weszlo').end();

  try {
    const sqlQuery = `DELETE FROM properties where id = ${(req.params.id)}`;
    const rows = await connection.query(sqlQuery);
    res.status(200).json({properties: 'Deleted'}).end();
    
  } catch (error) {
    res.status(400).send(error.message)
  }
});

module.exports = router

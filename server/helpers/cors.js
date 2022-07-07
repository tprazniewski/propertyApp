CORS = ((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // or instead of * use a for specific domain
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, ');
  res.setHeader('Access-Control-Allow-Credentials', false); // don't allow cookies

  next();
});
module.exports = CORS;

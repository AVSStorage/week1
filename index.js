require('http')
.Server((req, res) => {
  
  const CORS = {
    'Access-Control-Allow-Origin': '*',
    'X-Author' : 'alisefox',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
};
  res.writeHead(200, CORS);
  
  res.end('alisefox');
})
.listen(process.env.PORT);

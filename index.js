require('http')
.Server((req, res) => {

  const CORS = {
    'Access-Control-Allow-Origin': '*',
    'X-Author' : 'alisefox',
    'Content-Type': 'text/plain; charset=UTF-8',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
};
  res.writeHead(200, CORS);
  if (req.url === '/login/') {
    return res.end('alisefox');
  } else if(req.url === '/sample/') {
    return res.end((function task(x) {
      return x * this ** 2
    }).toString())
  }
  res.end('alisefox');
})
.listen(process.env.PORT);

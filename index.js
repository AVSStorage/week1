const fs = require('fs')
const path = require('path');
require('http')
.Server((req, res) => {

  const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'x-test,Content-Type,Accept,Access-Control-Allow-Headers'
};

  res.writeHead(200, CORS);
  if (req.url === '/result4/') {
    const data = { message: 'alisefox', 'x-result': req.headers['x-test']}

    let body = '';
    req.on('data', function (chunk) {
      body += chunk;
    }).on('end', (bodyData) => {
      return res.end(JSON.stringify({...data, 'x-body': bodyData}))
    });


    res.end('alisefox')

  } else {


    res.end('alisefox');
  }
})
.listen(process.env.PORT);

let http = require('http');
let users = [
  { id: 121, name: 'cwy' },
  { id: 222, name: 'cwr' },
  { id: 322, name: 'caa' },
];
let server = http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url === '/api/users') {
    res.end(JSON.stringify(users));
  } else {
    res.end('NOT Found');
  }
});

server.listen(3000, () => {
  console.log('客户端服务器已经启动了，端口3000');
});

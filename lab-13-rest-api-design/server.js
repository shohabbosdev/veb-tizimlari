const http = require('http');
let users = [{ id: 1, name: 'Shohabbos' }];
const server = http.createServer((req, res) => {
  if (req.url === '/api/users' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  }
});
server.listen(5000, () => console.log('REST API running on port 5000'));

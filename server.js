const http = require('http');
const fs = require('fs');
const path = require('path');
console.log('aqui');



const server = http.createServer((req, res) => {
  // Roteamento
  console.log('antes');
  console.log(req.url);
  console.log('depois');
  if (req.url === '/scanQrCode.html') {
    // Se a URL for '/', leia o arquivo index.html
    const filePath = path.join(__dirname, 'scanQrCode.html');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fileContent);
  } else {
    // Se a URL for diferente de '/', retorne 404 Not Found
    res.writeHead(404, { 'Content-Type': 'text/plain' });

    res.end('404 Not Found');
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/`);
});

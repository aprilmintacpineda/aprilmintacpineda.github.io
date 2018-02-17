import http from 'http';
import fs from 'fs';
import path from 'path';
import express from 'express';

const app = express();
const server = http.createServer(app);

app.get(/./, (request, response) => {
  console.log('request for', path.join(__dirname, request.url));

  if (request.url == '/') {
    response.sendFile(path.join(__dirname, 'index.html'));
  } else {
    response.sendFile(path.join(__dirname, request.url));
  }
});

server.listen(1414);
console.log('Go to http://localhost:1414/');
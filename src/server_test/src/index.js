// @flow

import http from 'http';
import fs from 'fs';
import path from 'path';

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
  const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
  res.writeHead(200);
  res.end(html.replace('{% placeholder %}', 'This is a string replacement'));
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://${host}:${port}`);
});

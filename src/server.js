const express = require('express');
const fallback = require('express-history-api-fallback');
const path = require('path');

const server = express();

// Serve static assets
const root = path.resolve(__dirname);

server.use((req, res, next) => {
  res.cookie('APP_ENV', process.env.APP_ENV || 'development');
  next();
});
server.use(express.static(root));
server.use(fallback('index.html', { root }));


const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  console.log(root);
});

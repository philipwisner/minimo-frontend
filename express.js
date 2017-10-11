const express = require('express');
const path = require('path');

const app = express();

app.listen(8080);

app.use(express.static('./dist'));

app.use((req, res, next) => {
  res.sendFile(path.resolve('./dist/index.html'));
})

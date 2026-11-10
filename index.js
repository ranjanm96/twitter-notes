const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('first let me welcome you!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
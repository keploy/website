const express = require('express');

const app = express();

const kMiddleware = require('@keploy/sdk/dist/v2/dedup/middleware.js');
app.use(kMiddleware());

app.get('/', (req, res) => {
  res.send('Welcome to the world of animals.');
});

app.get('/animals', async (req, res) => {
  try {
    res.json({ animals: "tiger" });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  } 
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});

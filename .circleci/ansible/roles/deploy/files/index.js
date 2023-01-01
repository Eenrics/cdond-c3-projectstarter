const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("ok");
});

app.get('/api/status', (req, res) => {
  res.send({status: "ok"});
});

app.listen(3030, () => console.log("Listening on port 3030"));

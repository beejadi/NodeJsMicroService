const express = require('express');
const bodyParser = require('body-parser');
const path=require('path')

const app = express();
const port = 3002;

app.use(bodyParser.json());

//app.use(express.static(__dirname + '../public'));
app.use(express.static(path.join(__dirname,'../public')));

app.post('/receive', (req, res) => {
  const receivedData = req.body.message;
  console.log('Received data:', receivedData);

  // Process the received data and send a response
  const response = { message: 'Data received and processed by Microservice 2.' };
  res.json(response);
});

app.listen(port, () => {
  console.log(`Receiver Microservice running on http://localhost:${port}`);
});
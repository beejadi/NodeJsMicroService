const express = require('express');
const bodyParser = require('body-parser');
const path=require('path')

const app = express();
const port = 3001;

app.use(bodyParser.json());

//app.use(express.static(__dirname + '../public'));
app.use(express.static(path.join(__dirname,'../public')));


app.post('/send', (req, res) => {
  const dataToSend = req.body.message;
  console.log('Sending data:', dataToSend);

  // Simulating sending data to Microservice 2 (Receiver)
  // In a real scenario, you would use HTTP requests
  // For this example, we'll just send a success response
  const response = { message: 'Data sent successfully to Microservice 2.' };
  res.json(response);
});

app.listen(port, () => {
  console.log(`Sender Microservice running on http://localhost:${port}`);
});
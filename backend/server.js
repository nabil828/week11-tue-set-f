const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// app.get('/code.js', (req, res) => {
//   res.sendFile(__dirname + '/code.js');
// });




app.listen(3000, () => {
  console.log('Example ning on port 3000!');
});


app.get('/weather', async (req, res) => {
  console.log(req.query.city)
  resp = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=b660f3402c54cb9a9c48f89c35249e5c&units=metric

`)
  resJson = await resp.json()
  res.send(resJson)
});
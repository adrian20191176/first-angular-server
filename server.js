const express = require('express');
const router = require('./lib');

const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/practiceFrontEnd/dist/sample-project/"));


app.get('/', (req,res) => {
  res.sendFile(process.cwd()+"/practiceFrontEnd/dist/sample-project/index.html")
});


app.use('/api/', router);

app.listen(port, function () {
  console.log('Server started on port', port);
});

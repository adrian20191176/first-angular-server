const express = require('express');
const router = require('./lib');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');


const app = express();

// Set our backend port to be either an environment variable or port 5000
const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    console.log("Hi");
    app.use(express.static(path.join(__dirname, 'Version2\build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'Version2\build', 'index.html'));
    });
};

app.use('/api/', router);

app.listen(port, function () {
  console.log('Server started on port', port);
});

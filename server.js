'use strict';

const Express = require('express');
const router = require('./lib');

const app = Express();
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static(path.join(__dirname, 'public')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });
};


app.use('/api/', router);

app.listen(port, function () {
  console.log('Server started on port', port);
});

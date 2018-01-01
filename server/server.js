const path = require('path');
const express = require('express');
const app = express();
const publicPath =  path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

// match all not defined routes
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// start server on port 3000
app.listen(3000, () => {
    console.log('Server is up!');
});
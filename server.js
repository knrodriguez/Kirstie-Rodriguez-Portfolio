const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path');

app.use(express.static(__dirname + '/assets'));

app.get('*', (req, res, next) => {
    try {
        res.sendFile(__dirname + '/assets/index.html');
    } catch (error) {
        res.status(500).send('Unable to complete the request')
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
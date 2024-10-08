const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const options = {
    key: fs.readFileSync('./cert/certificate.key'),
    cert: fs.readFileSync('./cert/certificate.crt')
}
const app = express();
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
});
http.createServer(app).listen(8000);
https.createServer(options, app).listen(443, () => {
    console.log('Server is running on port 443');
});

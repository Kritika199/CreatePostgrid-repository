const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define routes for custom activity endpoints
app.post('/publish', (req, res) => {
    console.log('Publish request received');
    console.log(req.body);
    res.status(200).send('Publish endpoint hit');
});

app.post('/validate', (req, res) => {
    console.log('Validate request received');
    console.log(req.body);
    res.status(200).send('Validate endpoint hit');
});

app.post('/execute', (req, res) => {
    console.log('Execute request received');
    console.log(req.body);
    res.status(200).send('Execute endpoint hit');
});

app.post('/stop', (req, res) => {
    console.log('Stop request received');
    console.log(req.body);
    res.status(200).send('Stop endpoint hit');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

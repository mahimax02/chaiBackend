require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/login', (req, res) => {
	res.send('please login this page');
});

app.get('/youtube.com', (req, res) => {
	res.send('<h1>want to go youtube <h1>');
});

app.listen(process.env.port, () => {
	console.log(`Example app listening on port ${port}`);
});

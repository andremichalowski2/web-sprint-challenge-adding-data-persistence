const express = require("express"); // import express
const router = require('../schemes/projects-router');
const server = express(); // instantiate server

server.use(express.json()); // configure server
server.use('/api/router', router)

server.get('/', (req, res) => {
	res.status(200).json({ serverMessage: 'Test endpoint' });
});

module.exports = server;
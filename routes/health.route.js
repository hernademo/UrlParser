const express = require('express')
const monitoring = require('../controllers/health.controller');

const routing = express.Router();

routing.get("/", monitoring);

module.exports = routing;
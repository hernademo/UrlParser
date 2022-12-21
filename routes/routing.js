const express = require('express');

const health = require('./health.route');

const routing = express.Router();

routing.use("/health", health);

module.exports = routing;
const service = require('../services/parser.service')

const urlParserMiddleware = (req, res, next) => {
    const hash = service.toHash(req.url)
    console.log(hash);
    next();
}

module.exports = urlParserMiddleware
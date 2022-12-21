const express = require('express')
const router = require('./routes/routing')
const urlParserMiddleware = require('./middleware/urlparser');

const app = express();

app.use(urlParserMiddleware);
app.use('/api', router);

const port = process.env.PORT || 8081;

app.listen(port, () => { 
    console.log(`Server running on port: ${port}`)
});
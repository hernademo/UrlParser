
const moment = require('moment'); 

const monitoring = (req, res) => {
    let running = `Api up and running:  ${moment().format()}`;
    res.send(running);
}

module.exports =  monitoring
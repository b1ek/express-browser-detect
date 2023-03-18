const Browser = require('which-browser');

/**
 * 
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {*} next 
 */
function handler(req, res, next) {
    const browser = new Browser(req.headers);
    req.browser = browser;
    next();
}

module.exports = handler;
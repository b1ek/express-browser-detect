const Browser = require('which-browser');
// const express = require('express');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {*} next 
 */
function handler(req, res, next) {
    const browser = new Browser(req.headers);
    req.browser = browser;
    next();
}

module.exports = handler;
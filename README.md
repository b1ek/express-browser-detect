<h1 align='center'>express-browser-detect</h1>
This middleware helps you to easily detect the user's browser.

It uses [which-browser](https://www.npmjs.com/package/which-browser) under the hood, and all the documentation is there

# Installation
```
yarn add --save express-browser-detect
```

Or if you prefer `npm`

```
npm install --save express-browser-detect
```

# Example
```
const express = require('express');
const app = express();
const port = 3000;
const ex_browser = require('express-browser-detect');

app.use(ex_browser);

app.get('/', (req, res) => {
  res.send('Your browser is: ' + req.browser.browser.toString());
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
```
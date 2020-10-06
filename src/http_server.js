const express = require('express')
const { render } = require('../dist/bundle_server')
const app = express();
app.get('/', function (req, res) {
    res.send(`
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app">${render}</div>
    <script src='https://kit.fontawesome.com/a076d05399.js'></script>
    <script src="../dist/bundle_server"></script>
</body>
</html>
    
    `)
})
app.use(express.static('.'));
app.listen(3000, () => {
    console.log('app listening on port 3000!')
})
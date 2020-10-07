const express = require('express')
let { renderToString } = require('react-dom/server')
const App = require('./app.jsx')
const app = express();
app.use(express.static("server"))
app.get('/', function (req, res) {
    const content = renderToString(<App />)
    const html = `
    <html>
            <head></head>
            <body>
                <div id="app">${content}</div>
                <script src="bundle_server.js"></script>
            </body>
        </html>
    `
    res.send(html)
})
app.listen(3001, () => {
    console.log('app listening on port 3001!')
})
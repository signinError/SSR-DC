import express from 'express';
import cors from 'cors';
import {renderToString} from 'react-dom/server';
import React from 'react';
import App from '../shared/App';
import serialize from 'serialize-javascript';
import { matchPath } from 'react-router-dom';
import routes from '../shared/routes';
import { StaticRouter } from 'react-router-dom';
const app = express();
app.use(cors());
app.use(express.static('public'));

app.get('*', (req, res, next) => {
    
    const markup = renderToString(
        <StaticRouter location={req.url} context={{}}>
            <App />
        </StaticRouter>
    )
    let data = []
    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Home</title>
                <script src="/bundle.js" defer> </script>
                <script>window.__initial_data__ = ${serialize(data)}</script>
            </head>

            <body id="app">
                ${markup}
            </body>
        </html>
    `);
});

app.get('/detail/:id', (req, res, next) => {
    const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}

    console.log(activeRoute);
    res.send('hello detail')
})

app.listen(8000, () => {console.log(
    'server started and listening at port: 8000'
)})
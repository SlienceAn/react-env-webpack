import React from 'react'
import ReactDom from 'react-dom'
import App from './app.jsx'
import './assets/css/main.scss'
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDom.render(
    <React.StrictMode>
            <App />
    </React.StrictMode>
    ,
    document.getElementById('app')
);

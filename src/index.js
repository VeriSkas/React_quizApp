import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const application = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

ReactDOM.render(application, document.getElementById('root'));

reportWebVitals();

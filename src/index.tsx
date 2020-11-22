import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import { Provider } from 'react-redux';
import './index.css';
import App from './views/App/App';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

reportWebVitals();

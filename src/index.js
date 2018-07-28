import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Login from './Login';

import { Provider } from 'react-redux'
import { createStore } from 'redux';

import {
    BrowserRouter as Router
} from 'react-router-dom';

import './globalStyle';
import reducer from './reducer';

import Routes from './Route';

const store = createStore(reducer);

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <Routes/>
        </Router>
    </Provider>
), document.getElementById('root'));

registerServiceWorker();


import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStroe from './store/configureStore';
import {BrowserRouter as Router} from 'react-router-dom';

const store = configureStroe();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
               hello word
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));


serviceWorker.unregister();

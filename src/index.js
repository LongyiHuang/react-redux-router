
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStroe from './store/configureStore';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';
const store = configureStroe();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                {Routes}
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));


serviceWorker.unregister();

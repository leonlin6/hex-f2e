import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducers from './Reducers';

ReactDOM.render(
    <Provider store={createStore(Reducers)}>
        <App></App>
    </Provider>,
    document.querySelector('#root')
);
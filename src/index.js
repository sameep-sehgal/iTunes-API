import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {IntlProvider} from "react-intl";

import App from './containers/App';
import Reducers from './reducers';
import {watchFetchData} from './sagas';


const sagaMiddleware = createSagaMiddleware(); 

const store = createStore(Reducers,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchData);


ReactDOM.render(
    <IntlProvider locale='en'>
        <Provider store={store}>
            <App />
        </Provider>
    </IntlProvider>,
    document.querySelector('#root')
)

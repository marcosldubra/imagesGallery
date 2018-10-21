import './node_modules/bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import Popper from 'popper.js';
import './node_modules/bootstrap/dist/js/bootstrap.bundle.min';

import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import imagesReducer from './reducers/reducers'

import App from './components/App.jsx'

const store = createStore(
  imagesReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

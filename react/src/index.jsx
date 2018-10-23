import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import 'bootstrap/css/bootstrap';
import $ from 'jquery';
import Popper from 'popper.js';
import "app/style";

import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import imagesReducer from 'app/reducers/reducers'
import App from 'app/components/App.jsx'

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

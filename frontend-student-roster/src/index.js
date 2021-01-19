// PROJECT REQUIREMENT: Appends React element to the DOM via a single HTML file


import React from 'react';
import ReactDOM from 'react-dom';
// Creates Redux store, 
import { createStore, applyMiddleware } from 'redux';
// Components aware of Redux store through Provider bridge
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App.js';
import { rootReducer } from './reducers/rootReducer.js';


// Can NOT pass in multiple Reducers nor multiple middleware
// rootReducer & compose combines the arguments into a single variable
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

// React application aware of the store
// Pass in store as a prop to Provider
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

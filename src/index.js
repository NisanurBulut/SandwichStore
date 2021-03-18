import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import sandwichBuilderReducer from './store/reducers/sandwichBuilder';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;
const store = createStore(
  sandwichBuilderReducer,
  composeEnhancers(applyMiddleware(thunk))
);
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>{app}</React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import counterReducer from './Reducer/counterReducer';
import buttonChoiceReducer from './Reducer/buttonChoiceReducer';

const rootReducer = combineReducers({
  counterReducer,
  buttonChoiceReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();

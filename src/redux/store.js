import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import productReducer from './producDuck'
import carReducer from './cardDuck'
import userReducer from './userDuck'


const rootReducer = combineReducers({
  user:userReducer,
  products: productReducer,
  car: carReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}

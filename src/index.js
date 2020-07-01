import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./CSS/bootstrap.min.css"
import generateStore from "./redux/store";
import {Provider} from 'react-redux'


const store = generateStore()

ReactDOM.render(
  <Provider store = {store}><App /></Provider>,
  document.getElementById('root')
);

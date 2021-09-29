import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OrderTable from './main/orderTable';
import testData from './data.json';
import { OrderData } from './main/types';
import reportWebVitals from './reportWebVitals';

let testData1: OrderData = testData[0];

ReactDOM.render(
    <React.StrictMode>
        <OrderTable />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

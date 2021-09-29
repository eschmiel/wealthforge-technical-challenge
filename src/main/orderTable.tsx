import React from 'react';
import OrderTableLabels from './orderTableLabels';
import Order from './order';
import './orderTable.css';

import testData from '../data.json';
import { OrderData } from './types';

export default function OrderTable() {

    let testData1 = testData[0];

    return (
        <div id='orderTable'>
            <OrderTableLabels />
            <Order orderData={testData1} />
        </div>
    );
}
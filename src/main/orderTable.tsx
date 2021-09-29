import React, { useState } from 'react';
import OrderTableLabels from './orderTableLabels';
import Order from './order';
import './orderTable.css';

import testData from '../data.json';
import { OrderData } from './types';

type OrderTableProps = {
    orders: OrderData[];
}

export default function OrderTable({ orders }: OrderTableProps) {

    const [pageNumber, setPage] = useState(1);

    function generateOrderPage() {
        let orderPage: JSX.Element[] = [];
        let countLimit = 0;
        let countStart = (pageNumber - 1) * 10; //This should provide the array index of the first order for the current page. 
                                                //i.e. countStart is 0 on page 1, 10 on page 2, 20 on page 3

        if (orders.length < pageNumber * 10) 
            countLimit = pageNumber * 10; //10 entries per page
        else countLimit = orders.length - 1;


        for (countStart; countStart < countLimit; countStart++) {
            orderPage.push(<Order orderData={orders[countStart]} />);
        }

        return orderPage;
    }

    return (
        <div id='orderTable'>
            <OrderTableLabels />
            {generateOrderPage()}
        </div>
    );
}
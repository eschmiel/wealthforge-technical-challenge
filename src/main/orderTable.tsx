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
    const maxPageEntries = 5;

    function generateOrderPage() {
        let orderPage: JSX.Element[] = [];
        let countLimit = 0;
        let countStart = (pageNumber - 1) * maxPageEntries; //This should provide the array index of the first order for the current page. 
                                                //i.e. countStart is 0 on page 1, 10 on page 2, 20 on page 3

        if (orders.length > pageNumber * maxPageEntries)
            countLimit = pageNumber * maxPageEntries; //10 entries per page
        else countLimit = orders.length;


        for (countStart; countStart < countLimit; countStart++) {
            orderPage.push(<Order orderData={orders[countStart]} />);
        }

        return orderPage;
    }

    function incrementPageNumber() {
        setPage(pageNumber + 1);
    }

    function decrementPageNumber() {
        setPage(pageNumber - 1);
    }

    return (
        <div id='orderTable'>
            <OrderTableLabels />
            {generateOrderPage()}
            <div id='pageControls'>
                {pageNumber === 1 ?
                    <div className='pageButton inactive'>{'<'}</div>
                    : <div className='pageButton clickable' onClick={decrementPageNumber}>{'<'}</div>
                }

                <div>{pageNumber}</div>

                {pageNumber * maxPageEntries < orders.length ?
                    <div className='pageButton clickable' onClick={incrementPageNumber}>{'>'}</div>
                    : <div className='pageButton inactive'>{'>'}</div>
                }
            </div>
        </div>
    );
}
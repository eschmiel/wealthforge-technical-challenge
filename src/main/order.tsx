import React from 'react';
import { OrderData } from './types';

type OrderProps = {
	orderData: OrderData
};

export default function order ({ orderData }: OrderProps) {

	let numberOfOrderItems = orderData.order_items.length;

	return (
		<div className='order'>
			<div className='idNumber'>{orderData.order_id}</div>
			<div className='idNumber'>{orderData.customer_id}</div>
			<div className='name'>{orderData.customer_first_name}</div>
			<div className='name'>{orderData.customer_last_name}</div>
			<div>Address</div> {/*create Address component*/}
			<div className='amount'>{orderData.order_amount}</div>
			<div className='date'>{orderData.order_date}</div> {/* parse date */}
			<div>{numberOfOrderItems}</div> {/*create order item component*/}
		</div>
	);
}
import React from 'react';
import { OrderData } from './types';

type OrderProps = {
	orderData: OrderData
};

export default function order ({ orderData }: OrderProps) {

	let numberOfOrderItems = orderData.order_items.length;

	return (
		<div className='order'>
			<div className='idNumberCell field'>{orderData.order_id}</div>
			<div className='idNumberCell field'>{orderData.customer_id}</div>
			<div className='nameCell field'>{orderData.customer_first_name}</div>
			<div className='nameCell field'>{orderData.customer_last_name}</div>
			<div className='addressCell field'>{'Address'}</div> {/*create Address component*/}
			<div className='amountCell field' style={{ marginLeft: '-4px' }}>{orderData.order_amount}</div>
			<div className='dateCell field'>{orderData.order_date}</div> {/* parse date */}
			<div className='orderItemsCell field' style={{marginLeft: '-5px'}}>{numberOfOrderItems + ' v'}</div> {/*create order item component*/}
		</div>
	);
}
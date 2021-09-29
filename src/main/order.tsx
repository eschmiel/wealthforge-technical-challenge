import React, { useState } from 'react';
import OrderAddress from './orderAddress';
import { OrderData } from './types';

type OrderProps = {
	orderData: OrderData
};

export default function Order ({ orderData }: OrderProps) {

	const [addressActive, setAddressStatus] = useState(false);

	let numberOfOrderItems = orderData.order_items.length;

	function toggleAddress() {
		setAddressStatus(!addressActive);
	}

	let addressFieldClasses = 'addressCell field expandable';
	if (addressActive)
		addressFieldClasses += ' active';


	return (
		<div className='order'>
			<div className='idNumberCell field'>{orderData.order_id}</div>
			<div className='idNumberCell field'>{orderData.customer_id}</div>
			<div className='nameCell field'>{orderData.customer_first_name}</div>
			<div className='nameCell field'>{orderData.customer_last_name}</div>
			<div className={addressFieldClasses}  onClick={toggleAddress}>{'Address'}</div> {/*create Address component*/}
			<div className='amountCell field' style={{ marginLeft: '-4px' }}>{orderData.order_amount}</div>
			<div className='dateCell field'>{orderData.order_date}</div> {/* parse date */}
			<div className='orderItemsCell field expandable' style={{ marginLeft: '-5px' }}>{numberOfOrderItems}</div> {/*create order item component*/}
			{addressActive && <OrderAddress address={orderData.customer_address} />}
		</div>
	);
}
import React, { useState } from 'react';
import OrderAddress from './orderAddress';
import { OrderData } from './types';
import OrderItem from './orderItem';

type OrderProps = {
	orderData: OrderData
};

export default function Order ({ orderData }: OrderProps) {

	const [addressActive, setAddressStatus] = useState(false);
	const [itemsActive, setItemsStatus] = useState(false);


	let numberOfOrderItems = orderData.order_items.length;

	let addressFieldClasses = 'addressCell field expandable';
	if (addressActive)
		addressFieldClasses += ' active';

	let orderItemsFieldClasses = 'orderItemsCell field expandable';
	if (itemsActive)
		orderItemsFieldClasses += ' active';

	let orderItemComponents: JSX.Element[] = [];
	orderData.order_items.forEach((currentItem, index) => orderItemComponents.push(<OrderItem item={currentItem} key={index} />));


	function toggleAddress() {
		setAddressStatus(!addressActive);
	}

	function toggleItems() {
		setItemsStatus(!itemsActive);
	}


	return (
		<div className='order'>
			<div className='idNumberCell field'>{orderData.order_id}</div>
			<div className='idNumberCell field'>{orderData.customer_id}</div>
			<div className='nameCell field'>{orderData.customer_first_name}</div>
			<div className='nameCell field'>{orderData.customer_last_name}</div>
			<div className={addressFieldClasses}  onClick={toggleAddress}>{'Address'}</div>
			<div className='amountCell field'>${orderData.order_amount}</div>
			<div className='dateCell field'>{orderData.order_date}</div>
			<div className={orderItemsFieldClasses} onClick={toggleItems}>{numberOfOrderItems}</div>
			{addressActive && <OrderAddress address={orderData.customer_address} />}
			{itemsActive && orderItemComponents}
		</div>
	);
}
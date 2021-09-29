import React from 'react';

export default function OrderTableLabels() {
	return (
		<div id='orderTableLabels'>
			<div className='idNumberField'>Order Id</div>
			<div className='idNumberField'>Customer Id</div>
			<div className='nameField'>First Name</div>
			<div className='nameField'>Last Name</div>
			<div className='addressField'>Address</div>
			<div className='amountField'>Order Amount</div>
			<div className='dateField'>Order Date</div>
			<div className='orderItemsField'>Order Items</div>
		</div>
	);
}
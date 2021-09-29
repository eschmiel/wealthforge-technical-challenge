import React from 'react';

export default function OrderTableLabels() {
	return (
		<div id='orderTableLabels'>
			<div className='idNumberCell label'>Order Id</div>
			<div className='idNumberCell label'>Customer Id</div>
			<div className='nameCell label'>First Name</div>
			<div className='nameCell label'>Last Name</div>
			<div className='addressCell label'>Address</div>
			<div className='amountCell label'>Amount</div>
			<div className='dateCell label'>Order Date</div>
			<div className='orderItemsCell label'>Items</div>
		</div>
	);
}
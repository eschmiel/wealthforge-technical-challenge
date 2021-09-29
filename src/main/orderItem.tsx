import React from 'react';
import { OrderItemData } from './types';

type OrderItemProps = {
    item: OrderItemData
}

export default function OrderItem({ item }: OrderItemProps) {

    return (
        <div className='expandedComponents'>Item:
            <div>Id: {item.id}</div>
            <div>Name: {item.name}</div>
            <div>Description: {item.description}</div>
            <div>Price: ${item.price}</div>
            <div>Quantity: {item.quantity}</div>
        </div>
    );
}
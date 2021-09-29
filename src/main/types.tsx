import React from 'react';

export type OrderData = {

    order_id: string,
    customer_id: string,
    customer_first_name: string,
    customer_last_name: string,
    customer_address: Address,
    order_amount: string,
    order_date: string,
    order_items: OrderItem[] 
};

type Address = {
    street: string,
    city: string,
    state: string,
    zip: string
};

type OrderItem = {
    id: string,
    name: string,
    description: string,
    price: string,
    quantity: number
};
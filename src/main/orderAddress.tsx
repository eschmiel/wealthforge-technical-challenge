import React from 'react';
import { Address } from './types';

type OrderAddressProps = {
    address: Address;
}

export default function OrderAddress({ address }: OrderAddressProps) {

    return (
        <div className='expandedComponents'>Address
            <div>Street: {address.street}</div>
            <div>City: {address.city}</div>
            <div>State: {address.state}</div>
            <div>Zip: {address.zip}</div>
        </div>
    );
}
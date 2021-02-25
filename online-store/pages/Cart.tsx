import { CartItemsList } from '../components/CartItemsList';
import { useStore } from '../hooks/useStore';
import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

export const Cart = observer(() => {
    const store = useStore();
    
    return <div>
        <Link to='/'>Go back home</Link>
        <h1>
            Cart
        </h1>
        <CartItemsList items={store.cartItems} />
    </div>
})

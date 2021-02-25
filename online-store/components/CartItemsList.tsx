import { useStore } from '../hooks/useStore';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Item } from 'stores/RootStore';

type ItemsListProps = {items: Item[]};

function constructItemList( items: Item[] ){
    
}

export const CartItemsList = observer(( { items } : ItemsListProps) => {
    const store = useStore();

    const removeFromCart = (id: number) => {
        const indexToRemove = store.storeItems.findIndex((item) => item.id === id );
        if( indexToRemove === -1 ){
            return;
        }
        console.log('remove id');
        store.removeItemFromCart(store.storeItems[indexToRemove]);
    }

    const itemList = items.map(({name, description, price, id}, index) => {
        console.log('recreate dom')
        return <li key={index}>
            <h1>{name}</h1>
            <h5>{price}</h5>
            <p>{description}</p>
            <input type='button' value='remove' onClick={() => removeFromCart(id)}/>
        </li>
    });

    return <ul>
        {itemList}
    </ul>
});
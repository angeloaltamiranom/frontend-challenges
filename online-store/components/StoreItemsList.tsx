import { useStore } from '../hooks/useStore';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Item } from 'stores/RootStore';

type ItemsListProps = {items: Item[]};

function constructItemList(input: ItemsListProps){
    const store = useStore();

    const addToCart = (index: number) => {
        store.addItemToCart(store.storeItems[index]);
    }

    return input.items.map(({name, description, price}, index) => {
        return <li key={index}>
            <h1>{name}</h1>
            <h5>{price}</h5>
            <p>{description}</p>
            <input type='button' value='add to shopping cart' onClick={() => addToCart(index)}/>
        </li>
    });
}

export const StoreItemsList = observer((items: ItemsListProps) => {
    return <ul>
        {constructItemList(items)}
    </ul>
});
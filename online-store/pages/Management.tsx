import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components"
import { useStore } from '../hooks/useStore';

const ManagementWrapper = styled.div`
    width: 100%;
    height: 100%;
`

export function Management() {
    const store = useStore();
    
    const setItem = () => {
        const itemNameInput = (document.getElementById('item-name') as HTMLInputElement);
        const itemPriceInput = (document.getElementById('item-price') as HTMLInputElement);
        const itemDescriptionInput = (document.getElementById('item-description') as HTMLInputElement);

        store.addItemToStore({
            name: itemNameInput.value,
            price: parseFloat(itemPriceInput.value),
            description: itemDescriptionInput.value,
            id: Date.now(),
        });

        itemNameInput.value = '';
        itemPriceInput.value = '';
        itemDescriptionInput.value = '';
    }

    return <ManagementWrapper>
        <Link to='cart'>Go to cart</Link>
        <Link to=''>Home</Link>
        <form>
            <span>Name</span><input type="text" id="item-name" />
            <span>price</span><input type="number" id="item-price"/>
            <span>description</span><input type="text" id="item-description"/>
            <input type="button" onClick={setItem} value="submit"/>
        </form>
    </ManagementWrapper>
}
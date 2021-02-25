import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StoreItemsList } from '../components/StoreItemsList';

import { useStore } from '../hooks/useStore';

const GloriousHeader = styled.h1`
    color: fuchsia;
`;

export function Home() {
    const store = useStore();

    return <div>
        <Link to='cart'>Go to cart</Link>
        <Link to='management'>Management</Link>
        <GloriousHeader>
            Homepage of the {store.storeName}
        </GloriousHeader>
        <StoreItemsList items={store.storeItems} />
    </div>
}

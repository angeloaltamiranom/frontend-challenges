import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useStore } from '../hooks/useStore';

const GloriousHeader = styled.h1`
    color: fuchsia;
`;

export function Home() {
    const store = useStore();

    return <div>
        <Link to='cart'>Go to cart</Link>
        <GloriousHeader>
            Homepage of the {store.storeName}
        </GloriousHeader>
    </div>
}

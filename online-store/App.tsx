import { Management } from './pages/Management';
import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

import { Cart } from './pages/Cart';
import { Home } from './pages/Home';

export function App() {
    return <BrowserRouter>
        <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/management" component={Management} />
            <Route path="/" component={Home} />
        </Switch>
    </BrowserRouter>
}

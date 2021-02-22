import { useContext } from 'react';

import { RootStoreContext } from '../stores/RootStore';

export function useStore() {
    return useContext(RootStoreContext);
}

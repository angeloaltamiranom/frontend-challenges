import {
	computed,
	makeObservable,
	observable,
} from 'mobx';
import { createContext } from 'react';

export class RootStore {
    @observable
    private _storeName: string = 'Rick & Morty store'

    constructor() {
        makeObservable(this);
    }

    @computed
    public get storeName() {
        return this._storeName;
    }
}

export const store = new RootStore();

export const RootStoreContext = createContext(store);
export const RootStoreProvider = RootStoreContext.Provider;

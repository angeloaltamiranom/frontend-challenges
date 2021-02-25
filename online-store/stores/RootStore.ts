import { createContext } from 'react';
import { observable, makeObservable, computed, action } from 'mobx';
import { arrayExtensions, IObservableArray } from 'mobx/dist/internal';

export interface Item {
    name: string;
    description: string;
    price: number;
    id: number;
}

export class RootStore {
    @observable
    private _storeName: string = 'Rick & Morty store'
    @observable
    public _storeItems: Item[] = [{
        name: 'pickle rick',
        price: 1,
        description: 'Sentient pickle',
        id: 0,
    },{
        name: 'random1',
        price: 5,
        description: 'randomness',
        id: 1,
    },{
        name: 'random2',
        price: 5,
        description: 'randomness',
        id: 2,
    },{
        name: 'switch',
        price: 10,
        description: 'Portable console',
        id: 3,
    }];

    // @observable
    // public _cartItems: IObservableArray<Item> = observable([]);
    @observable
    public _cartItems: Item[] = [];

    constructor() {
        makeObservable(this);
    }

    @computed
    public get storeName() {
        return this._storeName;
    }

    @computed
    public get storeItems() {
        return this._storeItems;
    }

    @computed
    public get cartItems() {
        return this._cartItems;
    }

    @action
    public addItemToStore(item: Item) {
        this._storeItems.push(item);
    }

    @action
    public addItemToCart(item: Item) {
        this._cartItems.push(item);
    }

    @action
    public removeItemFromCart(item: Item) {
        // const index = this._cartItems.findIndex((i) => i.id === item.id);
        // if ( index =)
        // this._cartItems.splice(index, 1);
        this._cartItems = this._cartItems.filter((i) => item.id !== i.id);
    }
}

export const store = new RootStore();

export const RootStoreContext = createContext(store);
export const RootStoreProvider = RootStoreContext.Provider;

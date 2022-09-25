import React from 'react';
export const Store = React.createContext();

let storeInitValue = {
    cart: [],
}

let reducer = (storeState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {...storeState, cart: [...storeState.cart,action.cartContents], qty: action.cartDetails}
        default:
      throw new Error();
    }
}


export default function Storeprovider (props) {

    let [storeState, dispatch] = React.useReducer(reducer, storeInitValue);

    console.log(storeState);


    let globalStoreState = {
        storeState,
        dispatch,
    }

    return (
        <Store.Provider value= {globalStoreState}>
            {props.children}
        </Store.Provider>
    )
}
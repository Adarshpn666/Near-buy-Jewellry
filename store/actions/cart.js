export const ADD_ITEM_CART = 'ADD_ITEM_CART';
export const REMOVE_ITEM_CART = 'REMOVE_ITEM_CART';


export const addItemToCart = (id) => {
    return{type: TOGGLE_FAVORITE, productId : id};
};

export const removeItemToCart = (id) => {
    return{type: TOGGLE_FAVORITE, productId : id};
};




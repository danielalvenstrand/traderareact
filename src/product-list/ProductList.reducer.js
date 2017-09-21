import { RECEIVE_PRODUCTS } from "./ProductList.actions";

const

    PRODUCTS = 'PRODUCTS',

    localProducts = JSON.parse(localStorage.getItem(PRODUCTS)),

    initState = localProducts ? [...localProducts] : [],

    productListReducer = (state = initState, action) => {
        switch(action.type) {
            case RECEIVE_PRODUCTS:
                const products = [
                    ...action.products
                    ];
                localStorage.setItem(PRODUCTS, JSON.stringify(products));
                return products;
            default:
                return state;
        }
    };

export default productListReducer;
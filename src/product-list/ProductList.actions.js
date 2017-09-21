import {setReady} from "../app/App.actions";

export const

    RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS',

    receiveProducts = (products) => {
        return {
            type: RECEIVE_PRODUCTS,
            products
        }
    },

    fetchProducts = () => {
        return (dispatch) => {
            fetch('products.json')
                .then(data => data.json())
                .then(json => {
                    dispatch(receiveProducts(json.products));
                    dispatch(setReady);
                });
        }
    };
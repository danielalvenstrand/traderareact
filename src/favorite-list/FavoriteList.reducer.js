import {} from './FavoriteList.actions';
import {TOGGLE_FAVORITE, CLEAR_FAVORITES} from "./FavoriteList.actions";

const

    FAVORITES = 'FAVORITES',

    localFavorites = JSON.parse(localStorage.getItem(FAVORITES)),

    initState = localFavorites ? [...localFavorites] : [],

    favoriteListReducer = (state = initState, action) => {
        switch(action.type) {
            case TOGGLE_FAVORITE:
                const favorites = state.find(product => product.id === action.product.id) ?
                    [
                        ...state.filter(product => {
                            return product.id !== action.product.id
                        })
                    ] :
                    [
                        ...state,
                        action.product
                    ];
                localStorage.setItem(FAVORITES, JSON.stringify(favorites));
                return favorites;
            case CLEAR_FAVORITES:
                localStorage.setItem(FAVORITES, JSON.stringify([]))
                return [];
            default:
                return state;
        }
    };

export default favoriteListReducer;
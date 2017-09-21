export const

    TOGGLE_FAVORITE = 'TOGGLE_FAVORITE',
    CLEAR_FAVORITES = 'CLEAR_FAVORITES',

    toggleFavorite = (product) => {
        return {
            type: TOGGLE_FAVORITE,
            product
        }
    },

    clearFavorites = {
        type: CLEAR_FAVORITES
    };
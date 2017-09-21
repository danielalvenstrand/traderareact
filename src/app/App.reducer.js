import {SET_READY} from "./App.actions";

const

    initState = {
        ready: false
    },

    appReducer = (state = initState, action) => {
        switch(action.type) {
            case SET_READY:
                return {
                    ...state,
                    ready: true
                }
            default:
                return state;
        }
    };

export default appReducer;
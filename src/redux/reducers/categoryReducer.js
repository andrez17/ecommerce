import { ActionTypes } from "../contants/action-types";

const initialState = {
    category: ''
};
export const categoryReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        default:
            return state;
    }
}
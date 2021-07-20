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

// export const saveCategory = async(dispatch, getState) => {
//     const category = getState().category;
//     await fetch('http://localhost:4000/category', {
//         method: "POST",
//         headers: {
//             'Accept': 'application/json',
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify(category)
//     })
//     alert('success')
// }
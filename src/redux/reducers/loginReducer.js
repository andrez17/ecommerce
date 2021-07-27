import { ActionTypes } from "../contants/action-types";

const initialState = {
    login: []
};
export const loginReducer = (state = initialState, action) => {
    // console.log('action', action)
    switch(action.type){
        case ActionTypes.SET_LOGIN:
            return {
                ...state,
                login: action.payload
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
import { ActionTypes } from "../contants/action-types";

export const setLogin = (login) => {
    return {
        type: ActionTypes.SET_LOGIN,
        payload: login
    }
}
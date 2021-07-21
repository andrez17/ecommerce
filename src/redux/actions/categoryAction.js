import { ActionTypes } from "../contants/action-types";

export const setMarker = (marker) => {
    return {
        type: ActionTypes.SET_MARKER,
        payload: marker
    }
}
import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { markerReducer } from "./categoryReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    marker: markerReducer
})

export default reducers
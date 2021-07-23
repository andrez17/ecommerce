import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { loginReducer } from "./loginReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    login: loginReducer
})

export default reducers
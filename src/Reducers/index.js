import { combineReducers } from "redux";
import proReducer from "./ProductsReducer";
const rootReducer = combineReducers({
  products: proReducer,
});
export default rootReducer;

import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

// import { cartReducer } from "./reducers/cartReducer";
import { getProductReducer, getProductDetailsReducer } from "./reducers/productReducer";

const reducer = combineReducers({
  //   cart: cartReducer,
  // this getProducts is being shown in our extension which we use for the useSelector Hook!
  // key name: actual function name
  getProducts: getProductReducer,
  getProductDetails: getProductDetailsReducer,
});

const middleware = [thunk];

// Arguments: reducer function, middleware
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;

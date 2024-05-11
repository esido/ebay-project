import { combineReducers } from "redux";
import { likeSlice } from "./likeSlice";
import { cartSlice } from "./cartSlice";

const rootReducer = combineReducers({
  likes: likeSlice.reducer,
  cart: cartSlice.reducer,
});

export default rootReducer;

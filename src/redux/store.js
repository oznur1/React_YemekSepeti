import { applyMiddleware, combineReducers, createStore } from "redux";
import restaurantReducers from "./reducers/restaurantReducers";
import {thunk}  from "redux-thunk";
import cartReducer from "./reducers/cartReducer";




//birden fazla reducer case olanları birleştir
const rootReducer = combineReducers({
    restaurantReducers,
  cartReducer
});

//store oluştur
 const store=createStore(rootReducer,applyMiddleware(thunk));

 //projeyi import et
 export default store;
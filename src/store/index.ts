import productReducer, { IProductState } from "./product/reduce"
import thunk from "redux-thunk"
import categoriesReducer, { ICategorieState } from "./category/reduce"
import { applyMiddleware, combineReducers, createStore } from "redux"

import orderReducer, { IOrderState } from "./cart/reducer"


import userReducer, { IUserState } from "./user/reduce"

export interface IRootState {
    products: IProductState,
    categories: ICategorieState,
    users: IUserState,
    orders: IOrderState
}
const rootReducer = combineReducers({
    products: productReducer,
    categories: categoriesReducer,
    orders : orderReducer,
    users: userReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))

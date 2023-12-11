import { IProducts } from "../product/action";
import { AddCartDispatchType } from "./type";

export interface AddCartAction {
    type: 'add-cart',
    payload: IProducts
}
export function AddCartAction(product : IProducts){
    const action : AddCartAction = {
        type: 'add-cart',
        payload: product
    }
    return (dispatch: AddCartDispatchType) =>{
        dispatch(action)
    }
}//sang reducer
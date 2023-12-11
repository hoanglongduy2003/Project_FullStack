import { AddCartAction } from "./action"

export interface IOrder {
    productID: string,
    quatity: number  //số lượng

}
export interface IOrderState{
    orders : IOrder[]
}

const initOrderState : IOrderState = {
    orders : []
}

const orderReducer = (state: IOrderState = initOrderState, action: AddCartAction) : IOrderState =>{
        switch( action.type){
            case 'add-cart':
                const orderExitIndex =  state.orders.findIndex(order =>order.productID == action.payload._id )
                if(orderExitIndex === -1){
                    state = {
                        ...state,
                        orders : [{
                            productID: action.payload._id,
                            quatity: 1
                        },...state.orders]
                    }
                }else{
                    state.orders[orderExitIndex].quatity += 1
                    state = {
                        ...state,
                        orders: state.orders
                    }
                }

                break;
        }

    return state;
}
export default orderReducer
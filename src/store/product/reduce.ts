

import { AddProductAction, DeleteProductAction, GetAllProductAction, GetByIdProductAction, IProducts, LoadingStudentAction, UpdateProductAction } from "./action";

export interface IProductState {
    products: IProducts[],
    isDataLoaded: boolean,
    error: unknown
}
const initProductsState: IProductState = {
    products: [],
    isDataLoaded: false,
    error: null
}

type ICombinedAction = GetAllProductAction | GetByIdProductAction | AddProductAction | DeleteProductAction | UpdateProductAction | LoadingStudentAction;
const productReducer = (state: IProductState = initProductsState, action: ICombinedAction): IProductState => {
    switch (action.type) {
        case 'getall-prd':
            state = {
                ...state,
                products: action.payload.products

            }
            break;
            case 'getbyid-prd':
            state = {
                ...state,
                products: action.payload.products
            }
            break;
        case 'add-prd':
            state = {
                ...state,
                products: state.products.concat(action.payload)
            }

            break;
        case 'delete-prd':
            state = {
                ...state,
                products: state.products.filter(product => product._id !== action.payload._id)
            }

            break;
        case 'update-prd':
            state = {
                ...state,
                products: state.products.map((item: any) => item.id === action.payload._id ? action.payload : item)
            }
            break;
        case "loading":

            state = {
                ...state,
                isDataLoaded: action.payload
            }
            break;
    }
    return state;
}
export default productReducer

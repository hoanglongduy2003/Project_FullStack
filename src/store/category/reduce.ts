import { AddCategoriesAction, DeleteCategoriesAction,UpdateCategoriesAction, GetAllCategoriesAction, ICategory } from "./action";

export interface ICategorieState {
    categories: ICategory[],
    isDataLoaded: boolean,
    error: unknown
}
const initProductsState: ICategorieState = {
    categories: [],
    isDataLoaded: false,
    error: null
}

type ICombinedAction = GetAllCategoriesAction | AddCategoriesAction | DeleteCategoriesAction | UpdateCategoriesAction;
const categoriesReducer = (state :ICategorieState = initProductsState, action : ICombinedAction ): ICategorieState => {
    switch (action.type) {
        case 'getall-cate' :
            state = {
                ...state,
                categories: action.payload.categories
            }
        break;
        case 'add-cate' :
            state = {
                ...state,
                categories: state.categories.concat(action.payload)
            }
        break;
        case 'delete-cate' :
            state = {
                ...state,
                categories: state.categories.filter(cate => cate._id !== action.payload._id)
            }
        break;

        case 'update-cate' :
            state={
                ...state,
                categories: state.categories.map((item: any) =>item.id === action.payload._id ? action.payload : item)
            }
            break;

    }
    return state;
}
export default categoriesReducer
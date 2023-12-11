import { AddCategoriesDispatchType, DeleteCategoriesDispatchType, GetAllCategoriesDispatchType,UpdateCategoriesDispatchType } from "./type"

export interface ICategory {
    _id: string,
    name: string,
    image: string,
}
export interface IGetCategoriesPayLoad {
    categories: ICategory[]
}
export type DeleteCategoriesAction = {
    type: 'delete-cate',
    payload: ICategory
}
export type GetAllCategoriesAction = {
    type: 'getall-cate',
    payload: IGetCategoriesPayLoad
}
export type AddCategoriesAction = {
    type: 'add-cate',
    payload :ICategory
}
export type UpdateCategoriesAction = {
    type: 'update-cate',
    payload :ICategory
}
export function getAllCategories(){
    return async (dispatch : GetAllCategoriesDispatchType) => {
        try {
            const response = await fetch('http://localhost:8080/api/categories');
                const data: any = await response.json();
            dispatch({
                type : 'getall-cate',
                payload : {
                    categories: data.datas
                }
            })
        } catch (error) {
            console.log(error);
            
        }
    }
}
export function addCategories(prd: ICategory){
    return async (dispatch : AddCategoriesDispatchType) => {
        try {
            const { _id, ...categoryData } = prd;
            const response = await fetch('http://localhost:8080/api/categories',{
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(categoryData)
            });
            if(!response.ok) {
                console.log('Errror');
            }
            const data = await response.json();
            dispatch({
                type : 'add-cate',
                payload : data.category
            })
            console.log(data);
            
        } catch (error) {
            console.log(error);
            
        }
    }
}


export function updateCategories(prd: any) {
    return async (dispatch: UpdateCategoriesDispatchType) => {
      try {
        const { _id, ...categoryData } = prd;
        const response = await fetch(`http://localhost:8080/api/categories/${prd._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(categoryData),
        });
  
        if (!response.ok) {
          console.log('Error');
          throw new Error('Edit category failed'); // Throw an error for failure
        }
  
        const data = await response.json();
        dispatch({
          type: 'update-cate',
          payload: data.categoryData
        });
      } catch (error) {
        console.log(error);
       
      }
    };
  }
  

export function deleteCategories(prd: any){
    return async (dispatch : DeleteCategoriesDispatchType) => {
        try {
            const response = await fetch(`http://localhost:8080/api/categories/${prd._id}`,{
                method : 'DELETE',
            });
            if(!response.ok) {
                console.log('Errror');
            }
            dispatch({
                type : 'delete-cate',
                payload : prd
            })
        } catch (error) {
            console.log(error);
            
        }
    }
}
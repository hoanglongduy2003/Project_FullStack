import { Router } from "react-router-dom"

import { AddProductDispatchType, DeleteProductDispatchType, GetAllProductDispatchType, GetByIdProductDispatchType, LoadingDispatchType, UpdateProductDispatchType } from "./type"

export interface IProducts {
    _id: string,
    name: string,
    price: number,
    size: string[],
    color: string[],
    image: string[],
    desc: string,
    id_cate: string
}
export interface IGetProductPayLoad {
    products: IProducts[],
    loading : boolean,
    error: unknown
    
}
export type DeleteProductAction = {
    type: 'delete-prd',
    payload: IProducts
}
export type GetAllProductAction = {
    type: 'getall-prd',
    payload: IGetProductPayLoad
}
export type GetByIdProductAction = {
    type: 'getbyid-prd',
    payload: IGetProductPayLoad
}

export type AddProductAction = {
    type: 'add-prd',
    payload :IProducts
}
export type UpdateProductAction = {
    type: 'update-prd',
    payload :IProducts
}
export type LoadingStudentAction = {
    type:'loading',
    payload : boolean
}
export function getAllProduct(){
    return async (dispatch : GetAllProductDispatchType) => {
        try {
            const response = await fetch('http://localhost:8080/api/product/');
                const data: any = await response.json();
            dispatch({
                type : 'getall-prd',
                payload : {
                    products: data.product,
                    loading : false,
                    error : null
                }
            })
        } catch (error) {
            console.log(error);
            
        }
    }
}

export function getByIdProduct(prd: any) {
    return async (dispatch: GetByIdProductDispatchType) => {
        try {
            const response = await fetch(`http://localhost:8080/api/product/${prd}`);
            
            if (!response.ok) {
                console.log('Error');
            }
            const data: any = await response.json();
            dispatch({
                type: 'getbyid-prd',
                payload: {
                    products: data.product,
                    loading: false,
                    error: null
                }
            });
        } catch (error) {
            console.log(error);
        }
    };
}
export function addProduct(prd: any){
    return async (dispatch : AddProductDispatchType) => {
        try {
            const {_id, ...productData} = prd;
            const response = await fetch('http://localhost:8080/api/product',{
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(productData)
            });
            if(!response.ok) {
                console.log('Error');
            }
            
            const data = await response.json();
            console.log(data);
            dispatch({
                type : 'add-prd',
                payload : data.productData
            })
        } catch (error) {
            console.log(error);
            
        }
    }
}
export function updateProduct(prd: any){
    return async (dispatch : UpdateProductDispatchType) => {
        try {
            const {_id, ...productData} = prd;
            const response = await fetch(`http://localhost:8080/api/product/${prd._id}`,{
                method : 'PUT',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(productData)
            });
            if(!response.ok) {
                console.log('Error');
            }
            
            const data = await response.json();
            dispatch({
                type : 'update-prd',
                payload : data.productData
            })
        } catch (error) {
            console.log(error);
            
        }
    }
}
export function deleteProduct(prd: any){
    return async (dispatch : DeleteProductDispatchType) => {
        try {
            const response = await fetch(`http://localhost:8080/api/product/${prd._id}`,{
                method : 'DELETE',
            });
            if(!response.ok) {
                console.log('Error');
            }
            dispatch({
                type : 'delete-prd',
                payload : prd
            })
        } catch (error) {
            console.log(error);
            
        }
    }
}
export const loadingProduct = (loading = false) => {
    return (dispatch : LoadingDispatchType) => {
        dispatch({
            type : 'loading',
            payload :loading
        })
    }
}
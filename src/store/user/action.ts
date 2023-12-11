import { AddUserDispatchType, GetAllUserDispatchType, SigninUserDispatchType } from "./type"

export interface IUser {
    _id: string,
    name: string,
    email: string,
    password: string
    confirmPassword: string
}
export interface IGetUserPayLoad {
    users: IUser[]
}
export interface ITokenPayLoad {
    token: string
}
export type GetAllUserAction = {
    type: "getall-user",
    payload: IGetUserPayLoad
}
export type GetByIdUserAction = {
    type: "getid-user",
    payload: IUser
}
export type AddUserAction = {
    type: "add-user",
    payload: IUser
}
export type SignInUserAction = {
    type: "signin-user",
    payload: ITokenPayLoad
}
export type UpdateUserAction = {
    type: "update-user",
    payload: IUser
}
export type DeleteUserAction = {
    type: "delete-user",
    payload: IUser
}
export function getAllUser(){
    return async (dispatch : GetAllUserDispatchType) => {
        try {
            const response = await fetch('http://localhost:8080/api/categories');
                const data: any = await response.json();
            dispatch({
                type : 'getall-user',
                payload : {
                    users: data.data
                }
            })
        } catch (error) {
            console.log(error);
            
        }
    }
}
export function signup(user: IUser){
    return async (dispatch : AddUserDispatchType) => {
        try {
            const { _id, ...userData } = user;
            const response = await fetch('http://localhost:8080/api/signup',{
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(userData)
            });
            if(!response.ok) {
                console.log('Errror');
            }
            const data = await response.json();
            dispatch({
                type : 'add-user',
                payload : data.data
            })
            console.log(data.token);
            
        } catch (error) {
            console.log(error);
            
        }
    }
}
export function signin(user: IUser){
    return async (dispatch : SigninUserDispatchType) => {
        try {
            const { _id, ...userData } = user;
            const response = await fetch('http://localhost:8080/api/signin',{
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(userData)
            });
            if(!response.ok) {
                console.log('Errror');
            }
            const data = await response.json();
            localStorage.setItem('token', data.token);
            dispatch({
                type : 'signin-user',
                payload : data.data
            })
            console.log(data);
            
        } catch (error) {
            console.log(error);
            
        }
    }
}
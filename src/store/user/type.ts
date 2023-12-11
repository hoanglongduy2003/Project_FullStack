import { AddUserAction, DeleteUserAction, GetAllUserAction, GetByIdUserAction, SignInUserAction, UpdateUserAction } from "./action";

export type GetAllUserDispatchType = (args : GetAllUserAction) => GetAllUserAction;
export type GetByIdUserDispatchType = (args : GetByIdUserAction) => GetByIdUserAction;
export type AddUserDispatchType = (args : AddUserAction) => AddUserAction;
export type SigninUserDispatchType = (args : SignInUserAction) => SignInUserAction;
export type UpdateUserDispatchType = (args : UpdateUserAction) => UpdateUserAction;
export type DeleteUserDispatchType = (args : DeleteUserAction) => DeleteUserAction;

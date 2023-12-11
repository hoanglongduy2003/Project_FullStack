import { AddCategoriesAction, DeleteCategoriesAction, GetAllCategoriesAction, UpdateCategoriesAction } from "./action";

export type AddCategoriesDispatchType = (args : AddCategoriesAction) => AddCategoriesAction;
export type UpdateCategoriesDispatchType = (args : UpdateCategoriesAction) => UpdateCategoriesAction;

export type DeleteCategoriesDispatchType = (args : DeleteCategoriesAction) => DeleteCategoriesAction;
export type GetAllCategoriesDispatchType = (args : GetAllCategoriesAction) => GetAllCategoriesAction;

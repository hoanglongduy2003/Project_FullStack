
import { AddProductAction, DeleteProductAction, GetAllProductAction, GetByIdProductAction, LoadingStudentAction, UpdateProductAction } from "./action";

export type AddProductDispatchType = (args : AddProductAction) => AddProductAction;
export type UpdateProductDispatchType = (args : UpdateProductAction) => UpdateProductAction;
export type DeleteProductDispatchType = (args : DeleteProductAction) => DeleteProductAction;
export type GetAllProductDispatchType = (args : GetAllProductAction) => GetAllProductAction;

export type GetByIdProductDispatchType = (args : GetByIdProductAction) => GetByIdProductAction;
export type LoadingDispatchType = (args : LoadingStudentAction) => LoadingStudentAction;

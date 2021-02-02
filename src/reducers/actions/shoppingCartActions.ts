import { Product } from "../../types/types";

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";


export type ProductAction = { type: string, payload: Product }

export const onAddProduct = (data:Product):ProductAction => ({
    type: ADD_ITEM,
    payload: data
})

export const onRemoveProduct = (data:Product):ProductAction => ({
    type: REMOVE_ITEM,
    payload: data
})

export const updateProduct = (data:Product):ProductAction => ({
    type: UPDATE_ITEM,
    payload: data
})
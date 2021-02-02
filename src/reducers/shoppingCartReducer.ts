import { Product } from "../types/types"
import { ADD_ITEM, ProductAction, REMOVE_ITEM, UPDATE_ITEM } from "./actions/shoppingCartActions"

export interface ShoppingCartState {
    products: Product[]
}

const initialState = {
    products: []
}


export const shoppingCartReducer = (state: ShoppingCartState = initialState, action: ProductAction) => {
    switch (action.type) {
        case ADD_ITEM: {
            return { ...state, products: [...state.products, action.payload] }
        }
        case REMOVE_ITEM: {
            return { ...state, products: state.products.filter(item => item.id !== action.payload.id) }
        }
        case UPDATE_ITEM: {
            return { ...state, products: state.products.map(item => {
                if(item.id !== action.payload.id) {
                    return item
                }
                else {
                    return action.payload;
                }
            }) }
        }
        default: {
            return state
        }
    }

}

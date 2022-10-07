export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT'
export const GET_SELECTED_PRODUCT = "GET_SELECTED_PRODUCT"
export const REMOVE_SELECTED_PRODUCT = "REMOVE_SELECTED_PRODUCT"
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY'
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY'
export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_CART = 'DELETE_CART'

export function GetAllProducts(payload) {
    return {
        type: GET_ALL_PRODUCT,
        payload
    }
}

export function GetSelectedProduct(payload) {
    return {
        type: GET_SELECTED_PRODUCT,
        payload
    }
}

export function RemoveSelectedProduct() {
    return {
        type: REMOVE_SELECTED_PRODUCT
    }
}

export function AddToCart(id) {
    return {
        type: ADD_TO_CART,
        payload: {
            id
        }
    }
}

export function DeleteCart(id) {
    return {
        type: DELETE_CART,
        payload: {
            id
        }
    }
}

export function IncreaseQuantity(id) {
    return {
        type: INCREASE_QUANTITY,
        payload: {
            id
        }
    }
}

export function DecreaseQuantity(id) {
    return {
        type: DECREASE_QUANTITY,
        payload: {
            id
        }
    }
}
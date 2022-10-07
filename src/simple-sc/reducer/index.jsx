import { combineReducers } from "redux"
import { 
    GET_ALL_PRODUCT,
    GET_SELECTED_PRODUCT,
    REMOVE_SELECTED_PRODUCT,
    ADD_TO_CART, 
    DELETE_CART,
    DECREASE_QUANTITY, 
    INCREASE_QUANTITY
} from '../actions'

export const initProduct = {
    _products: [],
    cart: [],
    selectedProduct: null,
}

function cartReducer(state = initProduct, { type, payload }) {
    switch(type) {

        case GET_ALL_PRODUCT:
            return {
                ...state,
                _products: payload
            }

        case ADD_TO_CART:
            const item = state._products.find(product => product.id === payload.id)
            const inCart = state.cart.find(item => item.id === payload.id ? true : false)
            return {
                ...state,
                cart: inCart ? 
                state.cart.map(item => item.id === payload.id ? { ...item, qty: item.qty + 1 } : item)                
                : [ ...state.cart, { ...item, qty: 1 } ]
            }

        case DELETE_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== payload.id)
            }

        case INCREASE_QUANTITY:
            return { 
                ...state, 
                cart: state.cart.map(item => item.id === payload.id ? { ...item, qty: item.qty + 1 } : item)
            }

        case DECREASE_QUANTITY:
            return { 
                ...state, 
                cart: state.cart.map(item => {
                    if (item.id === payload.id) {
                        if (item.qty > 1) {
                            return { ...item, qty: item.qty - 1 }
                        } else {
                            return item
                        }
                    }
                    return item
                })
            }

        case GET_SELECTED_PRODUCT:
            return { ...state, selectedProduct: payload }
        
        case REMOVE_SELECTED_PRODUCT:
            return { ...state, selectedProduct: null }

        default:
            return state
    }
}

const rootReducer = combineReducers({
  cart: cartReducer,
})

export default rootReducer
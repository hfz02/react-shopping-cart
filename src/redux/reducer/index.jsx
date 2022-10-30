// import { combineReducers } from "redux"
import { 
    GET_ALL_PRODUCT,
    GET_SELECTED_PRODUCT,
    REMOVE_SELECTED_PRODUCT,
    ADD_TO_CART, 
    DELETE_ITEM,
    DELETE_CART,
    DECREASE_QUANTITY, 
    INCREASE_QUANTITY,
    CREATE_ORDER,
    CLEAR_ORDER,
} from '../actions'

export const initProduct = {
    _products: [],
    selectedProduct: null,
    cart: [],
    order: null,
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
            const selectedItem = state.selectedProduct
            const inCart = state.cart.find(item => item.id === payload.id ? true : false)
            return {
                ...state,
                cart: inCart ? 
                state.cart.map(item => item.id === payload.id ? { ...item, qty: item.qty + 1 } : item)                
                : [ ...state.cart, { ...item, ...selectedItem, qty: 1 } ]
            }
            
        case GET_SELECTED_PRODUCT:
            return { ...state, selectedProduct: payload }
            
        case CREATE_ORDER:
            return { ...state, order: payload }

        case DELETE_ITEM:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== payload.id)
            }

        case REMOVE_SELECTED_PRODUCT:
            return { ...state, selectedProduct: null }

        case DELETE_CART:
            return { ...state, cart: [] }
        
        case CLEAR_ORDER:
            return { ...state, order: null }    
                        
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

        default:
            return state
    }
}

// const rootReducer = combineReducers({
//   cart: cartReducer,
// })

export default cartReducer
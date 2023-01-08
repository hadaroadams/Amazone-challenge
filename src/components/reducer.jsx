import { statement } from "./Product"

export const initialState = {
    basket:[],
}

export const getBasketTotal = (basket) =>
basket?.reduce((amount,item) => item.price +amount,0)

const reducer = (state,action) => {
    switch(action.type){
        case statement:
        return {
            ...state,
              basket: [...state.basket,action.item],
        }
        default:
            return state
      }
} 
 
export default reducer
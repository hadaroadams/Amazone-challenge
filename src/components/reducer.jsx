import { statement } from "./Product"
import { removal } from "./CheckoutProduct"

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
        case removal:
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket ];
           if (index >=0){
            newBasket.splice(index,1);
           }
           else{
            console.warn(`Cant remove product (id:${action.id}) as its not in basket`)
           }
           return{
            ...state,
            basket:newBasket
           }
        
        default:
            return state
      }
} 
 
export default reducer
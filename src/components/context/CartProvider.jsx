/* eslint-disable no-case-declarations */
 
import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  cart: [],
};

// action type
const Add_To_Cart = "Add_To_Cart";
const Remove_To_Cart = "Remove_To_Cart";

const reducer = (state, action) => {
  switch (action.type) {
    case Add_To_Cart:
      const item = state.cart.find((i) => i.id === action.payload.id);
      if (item) {
        return {
          ...state,
          cart: state.cart.map((i) =>
            i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
          // console.log(action.payload)
        };
      }

      case Remove_To_Cart:
        return{
          ...state,
          cart: state.cart.filter((i)=>i.id !== action.payload)
        }

    default:
      return state;
  }
};

const CartContext = createContext();

const CartProvider = ({ children }) => {

  const storeData = JSON.parse(localStorage.getItem("cart"))||[]

  const [state, dispatch] = useReducer(reducer, {...initialState, cart:storeData});

  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(state.cart))
  },[state.cart])

  return (
    <div>
      <CartContext.Provider value={{ state, dispatch }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartProvider;
// create custom hook

export const useProduct = () => {
  const context = useContext(CartContext);
  return context;
};

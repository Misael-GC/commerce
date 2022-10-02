import { useState } from "react";

const useInitialState = () => {
    const initialState = {
        cart:[],
    }
    const [state, setState] = useState(initialState);
//payload -> product
    const addToCart = (payload) =>{
        setState({
            cart: [...state.cart, payload]//lo que está actualmen te en el array + el new product
        })
    }
    return {
        state,
        addToCart
    }
}

export default useInitialState;
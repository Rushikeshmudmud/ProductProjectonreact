import {createSlice} from '@reduxjs/toolkit'


let obj = {
    cartItems : [] 
}

let cartReducer =  createSlice({
    name : "cart",
    initialState : obj,
    reducers : {
    AddToCart : (state,action) => {
        state.cartItems.push(action.payload)
        
    },
    removefromCart : (state,action) => {
        state.cartItems.splice(action.payload , 1)
    }
}
})

export const {AddToCart , removefromCart} = cartReducer.actions;
export default cartReducer.reducer
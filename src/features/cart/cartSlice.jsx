import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0,
    shipping: 0,
    tax: 0,
    orderTotal: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const product = action.payload.product;

            const item = state.cartItems.find((cartItem) => cartItem.cartID == action.payload.product.cartID);

            if (item) {
                item.amount += product.amount;
            } else {
                state.cartItems.push(product);
            }

            state.numItemsInCart += product.amount;
            state.cartTotal += product.amount * product.price;
            state.tax = state.cartTotal * 0.1;
            state.orderTotal = state.cartTotal + state.tax + state.shipping;

        },
        removeItem: () => { },
        editItem: () => { },
        clearCart: () => { },
    }
})

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
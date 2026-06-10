import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

const defaultState = {
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0,
    shipping: 0,
    tax: 0,
    orderTotal: 0
}

const getCartFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("cart")) || defaultState;
}

const cartSlice = createSlice({
    name: "cart",
    initialState: getCartFromLocalStorage(),
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
            cartSlice.caseReducers.calculateTotals(state);
            toast.success("Item added to cart");
        },
        removeItem: (state, action) => { 
            
            const { cartID } = action.payload;
            const product = state.cartItems.find((item) => item.cartID === cartID);
            state.cartItems = state.cartItems.filter((item) => item.cartID != cartID);

            state.numItemsInCart -= product.amount;
            state.cartTotal -= product.amount * product.price;
            cartSlice.caseReducers.calculateTotals(state);
            toast.error("Item removed from cart");
        },

        editItem: (state, action) => {
            const { cartID, amount } = action.payload;
            const item = state.cartItems.find((element) => element.cartID == cartID);
            state.numItemsInCart = state.numItemsInCart + amount - item.amount;
            state.cartTotal = state.cartTotal + item.price * (amount - item.amount);
            item.amount = amount;
            cartSlice.caseReducers.calculateTotals(state);
            toast.success("Cart updated");
        },

        clearCart: () => {
            localStorage.setItem("cart", JSON.stringify(defaultState));
            return defaultState;
        },

        calculateTotals: (state) => {
            state.tax = state.cartTotal * 0.1;
            state.orderTotal = state.cartTotal + state.tax + state.shipping;

            localStorage.setItem("cart", JSON.stringify(state));
        }

    },


});

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

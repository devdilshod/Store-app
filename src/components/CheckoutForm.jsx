import React from "react"
import { Form ,redirect } from "react-router-dom"
import FormInput from "./FormInput"
import SubmitBtn from "./SubmitBtn"
import { customFetch, formatPrice } from "../utils";
import { toast } from "react-toastify";
import { clearCart } from "../features/cart/cartSlice";

export const action = (store) => async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } = store.getState().cartState;

    const info = {
        name,
        address,
        chargeTotal: orderTotal,
        orderTotal: formatPrice(orderTotal),
        cartItems,
        numItemsInCart
    }

    try {
        const response = customFetch.post(
            "/orders",
            { data: info },
            {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            }
        
        );
        store.dispatch(clearCart());
        toast.success("order placed successfully");
        return redirect("/orders");
    } catch (error) {
        const errorMessage = error?.response?.data?.error?.message || "there was an error placing your order";
        toast.error(errorMessage);
        return null;
    }

}


const CheckoutForm = () => {
    return (
        <Form method="POSt" className="flex flex-col gap-y-4">
            <h4 className="font-medium text-xl">Shipping Information</h4>
            <FormInput label="Firt Name" name="name" type="text" size="w-full" />
            <FormInput label="Address" name="address" type="text" size="w-full" />
            <div>
                <SubmitBtn text="Place Your Order " />
            </div>
        </Form>
    )
}

export default CheckoutForm;
import { toast } from "react-toastify";
import { CartTotals, CheckoutForm, SectionTitle } from "../components";
import { redirect } from "react-router-dom";

export const loader = (store) => async () => {
    const user = store.getState().userState.user;

    if (!user) {
        toast.error("You must be logged in to checkout");
        return redirect("/");
    }
    return null;
}

const Checkout = () => {
    return <>
        <SectionTitle text="Place Your Order" />
        <div className="mt-8 grid gap-8 md:grid-cols-2">
            <CheckoutForm />
            <CartTotals />
        </div>
    </>
}

export default Checkout;
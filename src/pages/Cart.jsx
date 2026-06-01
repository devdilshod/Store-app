import { useSelector } from "react-redux";

const Cart = () => {
    const cartData = useSelector((state) => state.cartState);
    console.log(cartData);
    
    return <h1 className="text-4xl">Cart</h1>
}

export default Cart;
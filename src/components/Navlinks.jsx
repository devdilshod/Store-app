import React from "react"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const links = [
    { id: 1, url: "/", text: "Home" },
    { id: 2, url: "about", text: "About" },
    { id: 3, url: "products", text: "Products" },
    { id: 4, url: "cart", text: "Cart" },
    { id: 5, url: "checkout", text: "Checkout" },
    { id: 6, url: "orders", text: "Orders" },


]

const NavLinks = () => {
    const user = useSelector(state => state.userState.user);
    return <>
        {
            links.map((link) => {
                if (!user && (link.url === "checkout" || link.url === "orders")) {
                    return null;
                }

                return (
                    <li key={link.id}>
                        <NavLink to={link.url} className={({ isActive }) => isActive ? "bg-neutral text-neutral-50" : ""}>
                            {link.text}
                        </NavLink>
                    </li>
                )
            })

        }

    </>
}
export default NavLinks;
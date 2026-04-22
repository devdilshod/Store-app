import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return <>
        <nav className="bg-base-200">
            <div className="navbar align-element">
                <div className="navbar-start">
                    <NavLink to="/" className="btn btn-primary text-3xl py-6 hidden lg:flex">
                        C
                    </NavLink>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <FaBarsStaggered className="w-6 h-6" />
                        </label>
                        <ul className="menu menu-sm shadow z-1 dropdown-content w-52 mt-3 bg-base-200 rounded-box">
                            Navl inks
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal">
                        Nav Link
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
                        <div className="indicator">
                            <BsCart3 className="w-6 h-6" />
                            <span className="indicator-item badge badge-primary badge-sm">9</span>
                        </div>
                    </NavLink>
                </div>
            </div>

        </nav>
    </>
}
export default Navbar;
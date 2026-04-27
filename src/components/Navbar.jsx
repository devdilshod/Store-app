import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./Navlinks";
import { useEffect, useState } from "react";

const themes = {
    winter: "winter",
    dracula: "dracula"
}
const getThemeFromLocalStorage = () => localStorage.getItem("theme") || themes.winter;

const Navbar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  const changeTheme = () => {
    let newTheme = theme === themes.winter ? themes.dracula : themes.winter;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

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
                            <NavLinks />
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal">
                        <NavLinks />
                    </ul>
                </div>
                <div className="navbar-end">

                    <label className="swap swap-rotate">
                        <input type="checkbox" onChange={changeTheme} />
                        <BsSunFill className="swap-on w-4 h-4" />
                        <BsMoonFill className="swap-off w-4 h-4" />
                    </label>

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
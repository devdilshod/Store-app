import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../features/user/userSlice"

const Header = () => {
    const user = useSelector((state) => state.userState.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser())
    }

    return (
        <header className="bg-neutral py-2 text-neutral-content">
            <div className="align-element flex justify-center sm:justify-end">
                {
                    user ? <div className="flex gap-x-2 sm:gap-8 items-center">
                        <p>Hello, {user.username}</p>
                        <button
                            type="button"
                            className="btn btn-xs btn-outline btn-primary uppercase"
                            onClick={handleLogout}
                        >
                            logout
                        </button>
                    </div>
                        : <div className="flex gap-x-6 justify-center items-center">
                            <Link to="/login" className="link link-hover text-xs sm:text-sm">
                                Sign in / Guest
                            </Link>
                            <Link to="/register" className="link link-hover text-xs sm:text-sm">
                                Register
                            </Link>
                        </div>
                }

            </div>
        </header>
    )
}

export default Header;
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { customFetch } from "../utils";
import { loginUser } from "../features/user/userSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export const action = (store) => async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
        const response = await customFetch.post("/auth/local", data);
        store.dispatch(loginUser(response.data));
        toast.success("logged in successfully");
        return redirect("/");
    } catch (error) {
        const errorMessage = error?.response?.data?.error?.message || "please double check your credentials";
        toast.error(errorMessage);
        return null;
    }
}

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginAsGuestUser = async () => {
        try {
            const response = await customFetch.post("/auth/local", {
                identifier: "test@test.com",
                password: "secret"
            });
            dispatch(loginUser(response.data));
            toast.success("welcome guset user");
            navigate("/")
        } catch (error) {
            toast.error("guset user login error.please ty leter.")
        }
    }

    return <section className="h-screen grid place-items-center">
        <Form method="POST" className="card flex flex-col w-96 p-8 bg-base-100 shadow-lg gap-y-4">
            <h4 className="text-3xl text-center font-bold">
                Login
            </h4>
            <FormInput
                type="email"
                label="Email"
                name="identifier"
                defaultValue="ttom@gmail.com"
            />
            <FormInput
                type="password"
                label="Password"
                name="password"
                defaultValue="1234321"
            />

            <div className="mt-4">
                <SubmitBtn text="LOGIN" />
            </div>

            <button type="button" className="btn btn-secondary" onClick={loginAsGuestUser}>
                GUEST USER
            </button>
            <p className="text-center">
                Not a mamber yet?
                <Link to="/register" className="link link-primary ml-2"> Register </Link>
            </p>

        </Form>
    </section>
}

export default Login;
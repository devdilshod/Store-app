import { Form, Link, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
        const response = await customFetch.post("/auth/local/register", data);
        toast("account created successfully ")
        return redirect("/login")
    } catch (error) {
        const errorMessage = error?.response?.data?.error?.message || "please double check your credentials";
        toast.error(errorMessage);
        return null;
    }

}

const Register = () => {
    return <section className="h-screen grid place-items-center">
        <Form method="post" className="card flex flex-col w-96 p-8 bg-base-100 shadow-lg gap-y-4">
            <h4 className="text-3xl text-center font-bold">
                Register
            </h4>
            <FormInput
                type="text"
                label="Username"
                name="username"
            />
            <FormInput
                type="email"
                label="Email"
                name="email"
            />
            <FormInput
                type="password"
                label="Password"
                name="password"
            />

            <div className="mt-4">
                <SubmitBtn text="REGISTER" />
            </div>

            <p className="text-center">
                Already a member?
                <Link to="/login" className="link link-primary ml-2"> Login </Link>
            </p>

        </Form>
    </section>
}

export default Register;
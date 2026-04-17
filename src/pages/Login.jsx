import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

const Login = () => {
    return <section className="h-screen grid place-items-center">
        <Form className="card flex flex-col w-96 p-8 bg-base-100 shadow-lg gap-y-4">
            <h4 className="text-3xl text-center font-bold">
                Login
            </h4>
            <FormInput
                type="email"
                label="Email"
                name="identifier"
                defaultValue="test@email.com"
            />
            <FormInput
                type="password"
                label="Password"
                name="password"
                defaultValue="secret"
            />

            <div className="mt-4">
                <SubmitBtn text="LOGIN" />
            </div>

            <button type="button" className="btn btn-secondary">
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
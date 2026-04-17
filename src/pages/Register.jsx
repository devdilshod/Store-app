import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

const Register = () => {
    return <section className="h-screen grid place-items-center">
        <Form className="card flex flex-col w-96 p-8 bg-base-100 shadow-lg gap-y-4">
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
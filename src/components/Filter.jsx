import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const Filter = () => {
    const { meta } = useLoaderData();

    return (
        <Form className="bg-base-200 rounded-lg px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2
        md:grid-cols-3 lg:grid-cols-4">
            <FormInput
                label="Search Product"
                type="search"
                name="search"
                size="input-sm"
            />

            <FormSelect
                label="Select Category"
                name="category"
                list={meta.categories}
                size="select-sm"
            />

            <FormSelect
                label="Select Company"
                name="company"
                list={meta.companies}
                size="select-sm"
            />

            <FormSelect
                label="Sort By"
                name="order"
                list={["a-z", "z-a", "high", "low"]}
                size="select-sm"
            />

            <FormRange
                label="Select Price"
                name="price"
                size="range-sm"
            />
            <FormCheckbox
                label="Free Shipping"
                name="shipping"
                size="checkbox-sm"
            />

            <button
                type="submit"
                className="btn btn-primary btn-sm uppercase"
            >
                Search
            </button>

            <Link to="/product" className="btn btn-accent btn-sm uppercase">
                Reset
            </Link>

        </Form>
    )
}

export default Filter;
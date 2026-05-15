import { useState } from "react";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";

const ProductsContainer = () => {
    const { meta } = useLoaderData();
    const { total } = meta.pagination
    const [layout, setLayout] = useState("grid");
    const setActiveStyles = (pattern) => {
        return `text-xl btn btn-circle btn-sm 
        ${pattern === layout ? "btn-primary text-primary-content" : "btn-ghost text-base-content"}`
    }

    return (
        <>
            <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
                <h4 className="font-medium text-md">
                    {total} product{total > 1 ? "s" : ""}
                </h4>
                <div className="flex gap-x-2">
                    <button
                        className={setActiveStyles("grid")}
                        onClick={() => setLayout("grid")}
                    >
                        <BsFillGridFill />
                    </button>
                    <button
                        className={setActiveStyles("list")}
                        onClick={() => setLayout("list")}
                    >
                        <BsList />
                    </button>
                </div>
            </div>

            <div>
                {
                    layout === "grid" ?
                        <ProductsGrid /> :
                        <ProductsList />


                }

            </div>
        </>

    )
}

export default ProductsContainer;
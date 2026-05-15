import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";


const ProductsList = () => {
    let { products } = useLoaderData();
    return (
        <div className="grid mt-12 gap-y-8">
            {
                products.map((product) => {
                    const { title, image, price, company } = product.attributes;
                    const dollarsAmount = formatPrice(price)
                    return <Link
                        to={`/products/${product.id}`}
                        key={product.id}
                        className="group flex flex-col sm:flex-row gap-y-4 flex-wrap p-8 rounded-lg bg-base-100 shadow-xl hover:shadow-2xl tracking duration-300"
                    >
                        <img
                            src={image}
                            alt={title}
                            className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300  " />

                        <div className="ml-0 sm:ml-16">
                            <h3 className="capitalize font-medium text-lg">
                                {title}
                            </h3>
                            <h4 className="capitalize text-md text-neutral-content">
                                {company}
                            </h4>
                        </div>
                        <p className="ml-0 sm:ml-auto text-lg font-medium">
                            {dollarsAmount}
                        </p>

                    </Link>
                })
            }
        </div>
    )
}

export default ProductsList;
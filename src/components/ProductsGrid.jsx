import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsGrid = () => {
    let { products } = useLoaderData();
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 pt-12 gap-4">
            {
                products.map((product) => {
                    const { title, image, price } = product.attributes;
                    const dollarsAmount = formatPrice(price)
                    return <Link to={`/products/${product.id}`} key={product.id} className="card w-full shadow-xl hover:shadow-2xl tracking duration-300" >
                        <div className="px-4 pt-4">
                            <img src={image} alt={title} className="rounded-xl h-64 md:h-48 w-full object-cover " />
                        </div>
                        <div className="card-body text-center items-center">
                            <h2 className="card-title capitalize tracking-wider">
                                {title}
                            </h2>
                            <span className="text-secondary">
                                {dollarsAmount}
                            </span>
                        </div>
                    </Link>
                })
            }
        </div>
    )
}

export default ProductsGrid;
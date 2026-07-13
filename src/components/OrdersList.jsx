import { useLoaderData } from "react-router-dom";

const OrdersList = () => {
    const { orders, meta } = useLoaderData();
    return (
        <div className="mt-8">
            <h4 className="mb-4 capitalize">
                total ordres : {meta.pagination.total}
            </h4>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Products</th>
                            <th>Cost</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order) => {
                                const id = order.id;
                                const { name, address, numItemsInCart, orderTotal, createdAt } = order.attributes;

                                return (
                                    <tr key={id}>
                                        <td>{name}</td>
                                        <td>{address}</td>
                                        <td>{numItemsInCart}</td>
                                        <td>{orderTotal}</td>
                                        <td>{createdAt}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default OrdersList;
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
    const { meta } = useLoaderData();
    const { pageCount, page } = meta.pagination;
    const navigate = useNavigate();
    const { search, pathname } = useLocation();

    const pages = Array.from({ length: pageCount }, (_, index) => {
        return index + 1;
    });

    const handlePageChange = (pageNumber) => {
        const searchParams = new URLSearchParams(search);
        searchParams.set("page", pageNumber);
        navigate(`/products?${searchParams.toString()}`);
    }

    return <div className="mt-16 flex justify-end">
        <div className="join">
            <button
                className="btn btn-xs sm:btn-md join-item"
                onClick={() => {
                    let prevPage = page - 1;
                    if (prevPage < 1) {
                        prevPage = pageCount;
                    }
                    handlePageChange(prevPage);
                }}
            >
                Prev
            </button>
            {
                pages.map((item) => {
                    return <button
                        onClick={() => handlePageChange(item)}
                        key={item}
                        className={`btn btn-xs sm:btn-md ${item === page ? "bg-base-300 border-base-300" : ""}`}
                    >
                        {item}
                    </button>
                })
            }
            <button 
            className="btn btn-xs sm:btn-md join-item"
            onClick={() => {
                let prevPage = page + 1;
                if (prevPage > pageCount) {
                    prevPage = 1;
                }
                handlePageChange(prevPage);
            }}
            >
                Next
            </button>
        </div>
    </div>
}

export default PaginationContainer;
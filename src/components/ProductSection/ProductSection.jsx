import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { Fade } from "react-awesome-reveal";

const ProductSection = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://equisports-server-side-tau.vercel.app/limited-products") 
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    if (loading) {
        return <p className="text-center text-lg font-semibold">Loading...</p>;
    }

    return (
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
            <Fade direction="down">
                <h1 className="text-4xl mb-10 text-blue-500 font-bold text-center">
                    Popular Equipment
                </h1>
            </Fade>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 my-14">
                {products.slice(0, 6).map((product) => (
                    <div
                        key={product._id}
                        className="group p-5 relative shadow-xl rounded-lg overflow-hidden transform transition-transform hover:scale-105"
                    >
                        <img
                            src={product.image}
                            alt={product.itemName}
                            className="w-full h-60 rounded-md object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <h2 className="text-lg mt-5 font-semibold mb-2 text-gray-900 dark:text-gray-100">
                            {product.itemName}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Processing Time: {product.processingTime}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                            Category: {product.categoryName}
                        </p>
                        <p className="text-blue-500 dark:text-blue-400 font-bold mt-2">
                            Price: ${product.price}
                        </p>
                        <p className="mt-2 text-green-500 dark:text-green-400">
                            Stock Status: {product.stockStatus}
                        </p>
                        <p className="text-yellow-500 dark:text-yellow-400 font-bold mt-2">
                            Rating: {product.rating}★
                        </p>
                        
                       <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
                           <Link to={`/product-details/${product._id}`}>View Details</Link>
                       </button>
                        <Tooltip
                            anchorSelect={`#view-${product._id}`}
                            content="You can see all details"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductSection;




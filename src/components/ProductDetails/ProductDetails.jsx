import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/equipment/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(error => console.error("Error fetching product:", error));
    }, [id]);

    if (loading) {
        return <p className="text-center text-lg font-semibold">Loading...</p>;
    }

    return (
        <div className="container mx-auto my-10 p-6 border rounded-lg shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
            <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
            <p className="text-gray-500">{product.category}</p>
            <p className="text-lg mt-2">{product.description}</p>
            <p className="text-xl font-bold mt-2">Price: ${product.price}</p>
            <p className="text-yellow-500">Rating: {product.rating} ⭐</p>
            <p className="mt-2"><strong>Customization:</strong> {product.customization}</p>
            <p><strong>Processing Time:</strong> {product.processingTime}</p>
            <p><strong>Stock Status:</strong> {product.stockStatus}</p>
            <p><strong>Seller:</strong> {product.userName} ({product.userEmail})</p>

            <button onClick={() => navigate("/")} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                🔙 Back to Home
            </button>
        </div>
    );
};

export default ProductDetails;

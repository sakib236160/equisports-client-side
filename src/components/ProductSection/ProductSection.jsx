import { useEffect, useState } from "react";

const ProductSection = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/limited-products") 
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
        <div className="container mx-auto my-8">
            <h2 className="text-center text-2xl font-bold mb-6">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                    <div key={product._id} className="border p-4 rounded-lg shadow-lg">
                        <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
                        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                        <p className="text-sm text-gray-500">{product.category}</p>
                        <p className="text-lg font-bold">${product.price}</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">View Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductSection;

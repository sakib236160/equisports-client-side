import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";


const AllSportsEquipment = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/all-products") 
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    if (loading) {
        return <p className="text-center text-lg font-semibold">Lodding...</p>;
    }

    return (
        <div className="container mx-auto my-8">
            <h2 className="text-center text-2xl font-bold mb-6">All Sports Equipment</h2>
            <table className="table-auto w-full text-left border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border-b">Name</th>
                        <th className="px-4 py-2 border-b">Category</th>
                        <th className="px-4 py-2 border-b">Price</th>
                        <th className="px-4 py-2 border-b">Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product._id} className="border-b">
                            <td className="px-4 py-2">{product.name}</td>
                            <td className="px-4 py-2">{product.category}</td>
                            <td className="px-4 py-2">${product.price}</td>
                            <td className="px-4 py-2">
                                {/* <Link to={`/product-details/${product._id}`}> */}
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
                                {/* </Link> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllSportsEquipment;
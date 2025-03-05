import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const ProductDetails = () => {
  const contextValue = useContext(authContext);
  console.log(contextValue);
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/equipment/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (loading) {
    return <p className="text-center text-lg font-semibold">Loading...</p>;
  }

  return (
    <div className="container mx-auto my-10 p-6 lg:p-12 bg-white rounded-lg shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Product Image */}
        <div className="w-full h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right: Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-800">{product.name}</h2>
            <p className="text-lg text-gray-600">{product.category}</p>
            <p className="text-gray-700 mt-4">{product.description}</p>
            <p className="text-xl font-semibold text-blue-500 mt-2">Price: ${product.price}</p>
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-yellow-500">Rating: {product.rating} ⭐</p>
            </div>
            <div className="mt-4">
              <p><strong>Customization:</strong> {product.customization}</p>
              <p><strong>Processing Time:</strong> {product.processingTime}</p>
              <p><strong>Stock Status:</strong> {product.stockStatus}</p>
              <p><strong>Seller:</strong> {product.userName} ({product.userEmail})</p>
            </div>
          </div>

          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all"
          >
             Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;


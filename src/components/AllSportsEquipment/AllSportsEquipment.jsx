import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { authContext } from "../AuthProvider/AuthProvider";

const AllSportsEquipment = () => {
  // const {user} = useContext(authContext);
  // console.log(user);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/all-products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  if (loading) {
    return <p className="text-center text-lg font-semibold">Loading...</p>;
  }

  return (
    <div className="container mx-auto my-8 px-6">
      <h2 className="text-center text-3xl font-extrabold mb-6 text-gray-900">
        All Sports Equipment
      </h2>
      <div className="overflow-x-auto bg-white shadow-xl rounded-xl border border-gray-200">
        <table className="min-w-full table-auto text-left">
          <thead>
            <tr className="bg-gradient-to-r from-[#124E66] to-[#1E88A8] text-white">
              <th className="px-6 py-3 text-sm font-semibold">Name</th>
              <th className="px-6 py-3 text-sm font-semibold">Category</th>
              <th className="px-6 py-3 text-sm font-semibold">Price</th>
              <th className="px-6 py-3 text-sm font-semibold">Operation</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product._id}
                className="hover:bg-gray-50 transition-all duration-300"
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-800">
                  {product.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {product.category}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 font-semibold">
                  ${product.price}
                </td>
                <td className="px-6 py-4 text-sm">
                  <Link to={`/product-details/${product._id}`}>
                    <button className="bg-blue-500 text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-blue-600 transition duration-200">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSportsEquipment;

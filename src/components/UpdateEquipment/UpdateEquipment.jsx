import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateEquipment = () => {
    const equipment = useLoaderData();
    const navigate = useNavigate(); 
    const { _id, name, image, category, description, price, rating, customization, processingTime, stockStatus, userEmail, userName } = equipment;

    const handleUpdateEquipment = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const category = form.category.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;

        const updateEquipment = {
            name, image, category, description, price, rating, customization, processingTime, stockStatus, userEmail, userName
        };

        // Send update request to the server
        fetch(`http://localhost:5000/equipment/${_id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateEquipment)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: "Update Equipment",
                    text: "Equipment updated successfully!",
                    icon: "success",
                    confirmButtonText: "OK"
                }).then(() => {
                    navigate('/my-equipment'); 
                });
            }
        });
    };

    return (
        <div className="mt-6 bg-gradient-to-r from-[#F4F3F0] via-[#1E88A8] to-[#F4F3F0] p-10 rounded-lg shadow-lg w-3/4 mx-auto transition-all duration-500 hover:scale-105">
            <h2 className="text-4xl font-bold text-center mb-6 text-[#2C3E50]">Update Equipment</h2>

            <form onSubmit={handleUpdateEquipment}>
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <input className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D2B48C] transition-all" type="text" name="image" defaultValue={image} placeholder="Enter Image URL" />
                    <input className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D2B48C] transition-all" type="text" name="name" defaultValue={name} placeholder="Enter Item Name" />
                    <select className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D2B48C] transition-all" name="category" defaultValue={category}>
                        <option value="">Select Category</option>
                        <option value="Football">Football</option>
                        <option value="Basketball">Basketball</option>
                        <option value="Tennis">Tennis</option>
                        <option value="Badminton">Badminton</option>
                        <option value="Cricket">Cricket</option>
                        <option value="Baseball">Baseball</option>
                        <option value="Cycling">Cycling</option>
                        <option value="Swimming">Swimming</option>
                    </select>
                    <input className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D2B48C] transition-all" type="text" name="description" defaultValue={description} placeholder="Enter Description" />
                    <input className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D2B48C] transition-all" type="number" name="price" defaultValue={price} placeholder="Enter Price" />
                    <input className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D2B48C] transition-all" type="number" step="0.1" name="rating" defaultValue={rating} placeholder="Enter Rating" />
                    <input className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D2B48C] transition-all" type="text" name="customization" defaultValue={customization} placeholder="Enter Customization Options" />
                    <input className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D2B48C] transition-all" type="text" name="processingTime" defaultValue={processingTime} placeholder="Enter Processing Time" />
                    <select className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D2B48C] transition-all" name="stockStatus" defaultValue={stockStatus}>
                        <option value="Stock In">Stock In</option>
                        <option value="Stock Out">Stock Out</option>
                    </select>
                    <input className="p-3 border rounded-lg bg-gray-200 cursor-not-allowed" type="email" name="userEmail" defaultValue={userEmail} readOnly />
                    <input className="p-3 border rounded-lg bg-gray-200 cursor-not-allowed" type="text" name="userName" defaultValue={userName} readOnly />
                </div>

                <button className="mt-6 w-full bg-[#1E88A8] text-white py-3 rounded-lg text-xl font-semibold shadow-md hover:bg-[#1E88A8] transition-all duration-300 transform hover:scale-105">
                    Update Equipment
                </button>
            </form>
        </div>
    );
};

export default UpdateEquipment;


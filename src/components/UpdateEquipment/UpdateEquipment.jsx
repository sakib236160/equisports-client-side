import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateEquipment = () => {
    const equipment= useLoaderData();
    const {_id,name, image, category, description, price, rating, customization, processingTime, stockStatus, userEmail, userName}=equipment;

     const handleUpdateEquipment = event => {
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
            const userEmail = form.userEmail.value;
            const userName = form.userName.value;
    
            const updateEquipment = {
                name, image, category, description, price, rating, customization, processingTime, stockStatus, userEmail, userName
            };
            console.log(updateEquipment);
    
    
            // send data too tha server
            fetch(`http://localhost:5000/equipment/${_id}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(updateEquipment)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Update New Equipment',
                        text: 'User Update Equipment Successfully!!',
                        icon: 'success',
                        confirmButtonText: 'ok sir'
                      })
                }
            })
        };
    return (
        <div className="bg-[#F4F3F0] p-10 rounded-lg w-3/4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Update New Equipment</h2>
        <p className="text-center text-gray-600 mb-6">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleUpdateEquipment}>
            <div className="grid grid-cols-2 gap-4">
                <input className="p-2 border rounded" type="text" name="image" defaultValue={image} placeholder="Enter Image URL" />
                <input className="p-2 border rounded" type="text" name="name" defaultValue={name}  placeholder="Enter Item Name" />
                <input className="p-2 border rounded" type="text" name="category" defaultValue={category} placeholder="Enter Category Name" />
                <input className="p-2 border rounded" type="text" name="description" defaultValue={description} placeholder="Enter Description" />
                <input className="p-2 border rounded" type="number" name="price" defaultValue={price} placeholder="Enter Price" />
                <input className="p-2 border rounded" type="number" step="0.1" name="rating" defaultValue={rating} placeholder="Enter Rating" />
                <input className="p-2 border rounded" type="text" name="customization" defaultValue={customization} placeholder="Enter Customization Options" />
                <input className="p-2 border rounded" type="text" name="processingTime" defaultValue={processingTime} placeholder="Enter Processing Time" />
                <input className="p-2 border rounded" type="number" name="stockStatus" defaultValue={stockStatus} placeholder="Enter Stock Status" />
                <input className="p-2 border rounded bg-gray-200" type="email" name="userEmail" defaultValue={userEmail} placeholder="User Email"  />
                <input className="p-2 border rounded bg-gray-200" type="text" name="userName" defaultValue={userName} placeholder="User Name" />
                {/* readOnly */}
            </div>
            <button className="mt-6 w-full bg-[#D2B48C] text-black py-2 rounded text-lg font-semibold">
                Update Equipment
            </button>
        </form>
    </div>
    );
};

export default UpdateEquipment;
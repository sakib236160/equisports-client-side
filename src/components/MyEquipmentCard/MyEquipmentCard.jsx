import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyEquipmentCard = ({equipment,equipments,setEquipments}) => {

    const handleDelete =_id=>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            fetch(`http://localhost:5000/equipment/${_id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your equipment has been deleted.",
                        icon: "success"
                      });
                      const remaining = equipments.filter(equip => equip._id !== _id);
                      setEquipments(remaining);
                }
            })
            }
          });
    }
    const {_id,name, image, category, description, price, rating, customization, processingTime, stockStatus, userEmail, userName}=equipment;
    return (
        <div className="bg-white rounded-lg shadow-lg flex items-center p-4 max-w-md">
        {/* Product Image */}
        <img
          src={image}
          alt={''}
          className="w-20 h-20 object-cover rounded-full"
        />
        
        {/* Product Details */}
        <div className="ml-4 flex-1">
          <h3 className="text-lg font-bold">Name:{name} </h3>
          <p className="text-gray-600">Stock Status:{stockStatus} </p>
          <p className="text-gray-800 font-semibold">Price: {price} Taka</p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Link to={`/update-equipment/${_id}`}>
          <button className="bg-blue-500 text-white p-2 rounded">
            Update
          </button>
          </Link>
          <button onClick={()=>handleDelete(_id)} className="bg-red-500 text-white p-2 rounded">
            Delete
          </button>
        </div>
      </div>
    );
};

export default MyEquipmentCard;
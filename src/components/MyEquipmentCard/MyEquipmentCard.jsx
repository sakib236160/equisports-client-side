import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyEquipmentCard = ({equipment}) => {

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
          {/* <button className="bg-gray-200 p-2 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m0 0h6m-6 0V9m0 3v3" />
            </svg>
          </button> */}
          <Link to={`/update-equipment/${_id}`}>
          <button className="bg-blue-500 text-white p-2 rounded">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg> */}
            Update
          </button>
          </Link>
          <button onClick={()=>handleDelete(_id)} className="bg-red-500 text-white p-2 rounded">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg> */}
            Delete
          </button>
        </div>
      </div>
    );
};

export default MyEquipmentCard;
import { useLoaderData } from "react-router-dom";
import MyEquipmentCard from "../MyEquipmentCard/MyEquipmentCard";
import { useState } from "react";


const MyEquipment = () => {
    const loadedEquipments = useLoaderData();
    const [equipments,setEquipments] = useState(loadedEquipments)
    return (
        <div className="m-5 md:m-10 lg:m-20">
            <h5 className="text-center text-lg md:text-xl font-semibold mb-5">hello My Equipment components{equipments.length}</h5>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
           {
                equipments.map(equipment=><MyEquipmentCard key={equipment._id} equipment={equipment} equipments={equipments} setEquipments={setEquipments}></MyEquipmentCard>)
            }
           </div>
        </div>
    );
};

export default MyEquipment;
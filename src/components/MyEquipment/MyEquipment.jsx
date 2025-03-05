import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import MyEquipmentCard from "../MyEquipmentCard/MyEquipmentCard";

const MyEquipment = () => {
    const { user } = useContext(authContext); 
    const loadedEquipments = useLoaderData();
    
    
    const userEquipments = loadedEquipments.filter(equipment => equipment.userEmail === user?.email);
    
    const [equipments, setEquipments] = useState(userEquipments);

    return (
        <div className="m-5 md:m-10 lg:m-20">
            <h5 className="text-center text-lg md:text-xl font-semibold mb-5">
                Your Equipment: {equipments.length}
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    equipments.map(equipment => (
                        <MyEquipmentCard 
                            key={equipment._id} 
                            equipment={equipment} 
                            equipments={equipments} 
                            setEquipments={setEquipments} 
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default MyEquipment;

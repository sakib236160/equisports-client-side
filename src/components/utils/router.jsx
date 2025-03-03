import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import AllSportsEquipment from "../AllSportsEquipment/AllSportsEquipment";
import AddEquipment from "../AddEquipment/AddEquipment";
import MyEquipment from "../MyEquipment/MyEquipment";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/all-sports",
                element:<AllSportsEquipment></AllSportsEquipment>
            },
            {
                path:"/add-equipment",
                element:<AddEquipment></AddEquipment>
            },
            {
                path:"/my-equipment",
                element:<MyEquipment></MyEquipment>
            },
        ]
    }
])

export default router;
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import AllSportsEquipment from "../AllSportsEquipment/AllSportsEquipment";
import AddEquipment from "../AddEquipment/AddEquipment";
import MyEquipment from "../MyEquipment/MyEquipment";
import UpdateEquipment from "../UpdateEquipment/UpdateEquipment";
import ProductDetails from "../ProductDetails/ProductDetails";

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
                element:<MyEquipment></MyEquipment>,
                loader:()=>fetch('http://localhost:5000/equipment')
            },
            {
                path:"/update-equipment/:id",
                element:<UpdateEquipment></UpdateEquipment>,
                loader:({params})=> fetch(`http://localhost:5000/equipment/${params.id}`)
            },
            {
                path: "/product-details/:id",
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/equipment/${params.id}`)
            }
        ]
    }
])

export default router;
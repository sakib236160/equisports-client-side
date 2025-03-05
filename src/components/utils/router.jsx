import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import AllSportsEquipment from "../AllSportsEquipment/AllSportsEquipment";
import AddEquipment from "../AddEquipment/AddEquipment";
import MyEquipment from "../MyEquipment/MyEquipment";
import UpdateEquipment from "../UpdateEquipment/UpdateEquipment";
import ProductDetails from "../ProductDetails/ProductDetails";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


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
                element:<PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>
            },
            {
                path:"/my-equipment",
                element: <PrivateRoute><MyEquipment></MyEquipment></PrivateRoute>,
                loader:()=>fetch('https://equisports-server-side-tau.vercel.app/equipment')
            },
            {
                path:"/update-equipment/:id",
                element:<UpdateEquipment></UpdateEquipment>,
                loader:({params})=> fetch(`https://equisports-server-side-tau.vercel.app/equipment/${params.id}`)
            },
            {
                path: "/product-details/:id",
                element:<PrivateRoute>
                     <ProductDetails></ProductDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://equisports-server-side-tau.vercel.app/equipment/${params.id}`)
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    }
])

export default router;
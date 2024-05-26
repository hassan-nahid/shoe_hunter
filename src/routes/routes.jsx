import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../Layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import ProductDetails from "../pages/ProductDetails";
import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";
import ManageProduct from "../pages/ManageProduct";
import AllProduct from "../pages/AllProduct";
import DashboardHome from "../pages/DashboardHome";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/products/:id",
                element: <ProductDetails />,
                loader: ({params})=>fetch(`http://localhost:3000/shoes/${params.id}`)
            },
            {
                path: "all_product",
                element: <AllProduct />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
        children: [
            {
                index:true,
                element: <DashboardHome/>,
            },
            {
                path: "/dashboard/manage_product",
                element: <PrivateRoute><ManageProduct/></PrivateRoute>,
            },
            {
                path: "/dashboard/add_product",
                element:<PrivateRoute> <AddProduct/></PrivateRoute>,
            },
            {
                path: "/dashboard/edit_product/:id",
                element:<PrivateRoute> <EditProduct/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/shoes/${params.id}`)
            },
        ]
    }
]);
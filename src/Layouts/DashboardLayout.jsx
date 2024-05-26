import { useSignOut } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../firebase/firebase.config";
import Swal from "sweetalert2";

const DashboardLayout = () => {
    const [signOut] = useSignOut(auth);

    const handleLogout = async () => {
        Swal.fire({
            title: "Are you sure to Logout?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const success = await signOut()
                if (success) {
                    Swal.fire({
                        title: "Logout!",
                        text: "You have successfully logged out.",
                        icon: "success"
                    });
                }

            }
        });
    }

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <div className="my-4 lg:my-0">
                        <label htmlFor="my-drawer-2" className="btn btn-primary text-white drawer-button lg:hidden">
                            Open Menu
                        </label>
                    </div>
                    <div className="w-full">
                        <Outlet />
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col justify-between">
                        <div>
                            <li><Link className="font-semibold" to={'/'}>Main Home</Link></li>
                            <li><Link className="font-semibold" to={'/dashboard/manage_product'}>Manage Product</Link></li>
                            <li><Link className="font-semibold" to={'/dashboard/add_product'}>Add Product</Link></li>
                        </div>
                        <div className="flex justify-center">
                            <Link onClick={handleLogout} className="btn w-[80%] btn-error text-white">Logout</Link>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;

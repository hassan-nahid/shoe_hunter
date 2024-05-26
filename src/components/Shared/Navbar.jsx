import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";
import Swal from "sweetalert2";

const Navbar = () => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);

    const handleLogout = () => {
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
        <div className="navbar bg-base-100 px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link className="font-semibold" to="/">Home</Link></li>
                        <li><Link className="font-semibold" to="/all_product">All Product</Link></li>
                        {user && <li><Link className="font-semibold" to="/dashboard">Dashboard</Link></li>}
                    </ul>
                </div>
                <Link to={"/"} className="font-bold text-blue-800 text-xl">Shoe Hunter</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link className="font-semibold" to="/">Home</Link></li>
                    <li><Link className="font-semibold" to="/all_product">All Product</Link></li>
                    {user && <li><Link className="font-semibold" to="/dashboard">Dashboard</Link></li>}
                </ul>
            </div>
            <div className="navbar-end flex gap-2">
                {!user && <Link to="/login" className="btn btn-primary text-white">Login</Link>}
                {user && <div>
                    <div className="w-12 mx-2">
                        {user.photoURL === null ? <div className="avatar placeholder">
                            <div className="bg-neutral text-neutral-content rounded-full w-12">
                                <span title={user?.email}>{user?.email}</span>
                            </div>
                        </div> : <img className="rounded-full" src={user.photoURL} title={user?.email} />
                        }
                    </div>
                </div>}
                {user ? <Link onClick={handleLogout} className="btn btn-primary text-white">Logout</Link> : <Link to="register" className="btn btn-primary text-white">Register</Link>}
            </div>
        </div>
    );
};

export default Navbar;
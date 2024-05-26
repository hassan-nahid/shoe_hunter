import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";

const DashboardHome = () => {
    const [user] = useAuthState(auth);
    console.log(user);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm flex flex-col items-center">
                <div className="mb-4">
                    {user?.photoURL ? (
                        <img className="rounded-full w-32 h-32 object-cover shadow-lg" src={user.photoURL} alt="User Avatar" />
                    ) : (
                        <div className="avatar placeholder">
                            <div className="bg-neutral text-neutral-content rounded-full w-32 h-32 flex items-center justify-center">
                                <span className="text-2xl">Anonymous</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="text-center">
                    <h1 className="text-2xl font-semibold mb-2">
                        {user?.displayName || "Anonymous"}
                    </h1>
                    {user?.email && <h1 className="text-lg text-gray-600">{user.email}</h1>}
                </div>
                <button className="btn btn-error text-white my-2">Edit Profile</button>
            </div>
        </div>
    );
};

export default DashboardHome;

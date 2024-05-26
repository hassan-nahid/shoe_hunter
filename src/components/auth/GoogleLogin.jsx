import { FcGoogle } from "react-icons/fc";
import auth from "../../firebase/firebase.config";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleGoogleLogin = () => {
        signInWithGoogle()

    }

    console.log(user, loading, error)

    return (
        <div>
            <div className="divider"> or</div>

            <div className="flex justify-center items-center my-4">
                <button onClick={handleGoogleLogin} className="text-lg flex justify-center items-center gap-1 btn btn-primary text-white">Login With Google <FcGoogle /></button>
            </div>
        </div>
    );
};

export default GoogleLogin;
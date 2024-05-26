import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/auth/GoogleLogin";
import { useEffect } from "react";
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import Swal from "sweetalert2";

const Login = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        ,
        ,
        error,
      ] = useSignInWithEmailAndPassword(auth)

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        const success = signInWithEmailAndPassword(email,password)
        if(success){
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Login Successfully",
                showConfirmButton: false,
                timer: 1500
              });
        }
    }

    useEffect(() => {
        if(user){
            navigate("/")
        }
    },[navigate,user])

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-blue-800">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        {error && <div className="text-red-500">{error?.message}</div>}
                        <label className="label">
                           <h3>Don&apos;t Have Account <Link to={"/register"} className="link">Register</Link></h3>
                        </label>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white">Login</button>
                        </div>
                    </form>
                    <GoogleLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;
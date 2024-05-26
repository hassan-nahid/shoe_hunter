import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/auth/GoogleLogin";
import { useEffect, useState } from "react";
import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import Swal from "sweetalert2";

const Register = () => {

    const [passError,setPassError] =useState(false)
    const [
        createUserWithEmailAndPassword,
        ,
        ,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    useEffect(() => {
        if(user){
            navigate("/")
        }
       
    },[navigate,user,error])

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;

        console.log(email,password,confirm_password)
        if(password === confirm_password){
            const success = createUserWithEmailAndPassword(email,password)
            if(success){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Register Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        else{
            setPassError(true)
            return
        }
        
        
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-blue-800">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name="confirm_password" placeholder="confirm password" className="input input-bordered" required />
                        </div>
                        {passError && <div className="text-red-500">Password not match</div>}
                        {error && <div className="text-red-500">{error?.message}</div>}
                        
                        <label className="label">
                           <h3>Already Have Account <Link to={"/login"} className="link">Login</Link></h3>
                        </label>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white">Register</button>
                        </div>
                    </form>
                    <GoogleLogin />
                </div>
            </div>
        </div>
    );
};

export default Register;
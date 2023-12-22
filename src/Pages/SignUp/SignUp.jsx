import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import auth from "../../Firebase/firebase.config";
import { useForm } from "react-hook-form";

const SignUp = () => {
    const [registerError, setRegisterError] = useState('');
    const [sucess, setSucess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const sucessAlert = () => {
        Swal.fire(
            'Welcome!',
            'Registration Sucessfully!',
            'success'
        );
    }

    // const handleRegister = () => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     const terms = form.terms.checked;
    //     console.log(name, email, password, terms);

    const { register, handleSubmit, formState: { errors } } = useForm()


    const onSubmit = (data) => {
        console.log(data)

        // reset error & success
        setRegisterError('');
        setSucess('');

        // if (password.length < 6) {
        //     setRegisterError('Password must be at least 6 characters');
        //     return;
        // }

        // else if (!/(?=.*[A-Z])/.test(password)) {
        //     setRegisterError('Password must contain at least one uppercase letter');
        //     return;
        // }

        // else if (!/(?=.*[a-z])/.test(password)) {
        //     setRegisterError("Password must contain at least one lowercase letter.");
        //     return;
        // }

        // else if (!/(?=.*\d)/.test(password)) {
        //     setRegisterError("Password must contain at least one digit.");
        //     return;
        // }

        // else if (!/(?=.*[@$!%*?&])/.test(password)) {
        //     setRegisterError("Password must contain at least one special character (@, $, !, %, *, ?, or &).");
        //     return;
        // }

        // else if (!terms) {
        //     setRegisterError('You must agree to the terms and conditions');
        //     return;
        // }



        // create user 
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(result => {
                console.log(result.user);
                setSucess(sucessAlert)

                // update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: result.user.photoURL
                })
                    .then(() => {
                        console.log('Profile updated');
                    })
                    .catch()

            })
            .catch(error => {
                (console.error(error));
                setRegisterError(error.message);
            })
    }



    return (
        <>
            <div className="my-5">
                <h1 className="text-5xl text-center font-bold bg-base-200 py-10">Register now!</h1>
                <div className="hero bg-base-200 py-10">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="name" placeholder="name" {...register("name", { required: true })} name="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" {...register("email", { required: true })} name="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="url" {...register("photo", { required: true })} name="photo" className="input input-bordered" required />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={showPassword ? "text" : "password"} placeholder="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} className="input input-bordered" />
                                    <span className="absolute top-[63%] left-72" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>
                                <div>
                                    {errors.terms?.type === 'required' && <p className="text-red-600">You must agree to the terms and conditions</p>}
                                    <input type="checkbox" {...register("terms", { required: true, })} name="terms" id="terms" />
                                    <label htmlFor="terms"> Accept our <a className="link link-hover" href="">terms & condition</a></label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-outline">Register</button>
                                </div>
                                <label className="label">
                                    <p>Already have an account? <Link to='/login' className="link link-hover text-blue-600 font-bold">Login</Link></p>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="text-center bg-base-200 pb-10">
                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                    {registerError && <p className="text-xl text-red-600">{registerError}</p>}
                    {sucess && <p className="text-xl text-green-600">{sucess}</p>}
                </div>
            </div>
        </>
    );
};

export default SignUp;
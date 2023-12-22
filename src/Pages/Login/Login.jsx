import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import Swal from "sweetalert2";

const Login = () => {
    const { user, setUser } = useState(null);
    const [loginError, setLoginError] = useState('');
    const [sucess, setSucess] = useState('');
    const emailRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const sucessAlert = () => {
        Swal.fire({
            icon: 'success',
            title: 'User Login Successfully',
            showConfirmButton: false,
            timer: 1500
        })
    };
    const failAlert = () => {
        Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Please verify your information'
        })
    };
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                setUser(loggedUser);
            })
            .catch((error) => {
                console.log(error);
            })

    }

    const handleGithubSignIn =() => {

        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser);
            setUser(loggedUser);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log = (result);
                setUser(null);
            })
            .catch((error) => {
                console.log(error);
            })

    }



    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // reset error & success
        setLoginError('');
        setSucess('');

        // add validation
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                // console.log(result.user);
                if (result.user) {
                    setSucess(sucessAlert)
                }
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                (console.error(error));
                setLoginError(failAlert)
            })
    }


    return (
        <>
            <div className="my-5">

                <h1 className="text-5xl text-center font-bold bg-base-200 py-10">Login now!</h1>
                <div className="hero bg-base-200 py-10">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input ref={emailRef} type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline">Login</button>
                            </div>
                            <label className="label">
                                <p>Do not have an account? <Link to='/signup' className="link link-hover text-blue-600 font-bold">Sign Up</Link></p>
                            </label>
                        </form>
                    </div>
                </div>
                <div className='flex justify-center bg-base-200'>
                    {
                        user ?
                            <button onClick={handleSignOut}>Sign Out</button> : <div className="flex gap-3">
                                <button onClick={handleGoogleSignIn} className="btn btn-outline">Google Sign In</button>
                                <button onClick={handleGithubSignIn} className="btn btn-outline">GitHub Sign In</button>
                            </div>

                    }
                </div>
                <div className="text-center bg-base-200 pb-10">
                    {loginError && <p className="text-xl text-red-600">{loginError}</p>}
                    {sucess && <p className="text-xl text-green-600">{sucess}</p>}
                </div>
            </div>

        </>
    );
};

export default Login;
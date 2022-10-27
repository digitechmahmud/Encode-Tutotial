import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const [error, setError] = useState('');
    const { user, signIn, signInGoogle, signInGithub } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const navigate = useNavigate();

    const handleLoginForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                toast.success('Successfully loged in');
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(error => {
                toast.error(error.message);
            });
    }

    const handleGithubSignIn = () => {
        signInGithub(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Successfully log in');
                navigate(from, { replace: true });
                
            })
            .catch(error => {
                toast.error(error.message);
            });
    }

    const handleGoogleSignIn = () =>{
        signInGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Successfully log in');
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(error.message);
            });
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Learn Coding Online
                        With Professional Instructors.!!</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-l-4 border-slate-500">
                    <div className="card-body">
                        <form onSubmit={handleLoginForm}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                                <label className="label">
                                    <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                    <small>Not a member yet? <Link className='text-blue-500' to="/register">Register</Link></small>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-slate-500">Login</button>
                            </div>
                        </form>
                        <div>
                            <h2>Or login using:</h2>
                            <div className='flex'>
                                <Link onClick={handleGoogleSignIn} className='text-5xl mr-5'><FcGoogle /></Link>
                                <Link onClick={handleGithubSignIn} className='text-5xl'><FaGithub /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster/>
        </div>
    );
};

export default Login;
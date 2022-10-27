import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    const [error, setError] = useState('');
    const { user, createUser, signInGoogle, userProfileUpdate, signInGithub } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();

    const handleRegisterForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                handleUpdateProfile(name, photoURL);
                form.reset();
                navigate('/courses');
            })
            .catch(error => {
                toast.error(error.message);
            });
        
    }
    const handleGoogleRegister = () => {
        signInGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/courses');
            })
            .catch(error => {
                toast.error(error.message);
            });
    }

    const handleGithubRegister = () => {
        signInGithub(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/courses')

            })
            .catch(error => {
                toast.error(error.message);
            });
    }

    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        userProfileUpdate(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register</h1>
                    <p className="py-6">Learn Coding Online
                        With Professional Instructors.!!</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-l-4 border-slate-500">
                    <div className="card-body">
                        <form onSubmit={handleRegisterForm}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name="name" placeholder="full name" className="input input-bordered"/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered"/>
                            </div>
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
                                <label className="label">
                                    <small>Already have an account? <Link className='text-blue-500' to="/login">Login</Link></small>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-slate-500">Register</button>
                            </div>
                        </form>
                        <div>
                            <h2>Or register using:</h2>
                            <div className='flex'>
                                <Link onClick={handleGoogleRegister} className='text-5xl mr-5'><FcGoogle /></Link>
                                <Link onClick={handleGithubRegister} className='text-5xl'><FaGithub /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster/>
        </div>
    );
};

export default Register;
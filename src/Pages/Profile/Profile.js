import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={user.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{user.displayName}</h1>
                        <p className="py-6 font-semibold text-xl">User Name: {user.reloadUserInfo.screenName}</p>
                        <Link to='/courses'><button className="btn bg-slate-500">Back to Courses</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
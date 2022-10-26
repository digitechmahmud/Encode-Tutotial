import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import logo from '../../images/logo.png';
import { HiSun, HiMoon } from "react-icons/hi";

const Nav = () => {
    const { user, logOut } = useContext(AuthContext);

    return (

        <div className="navbar text-white bg-neutral text-neutral-content flex justify-between">
            <div >
                <Link to='/' className="btn btn-ghost normal-case text-xl"><img width={40} height={30} src={logo} alt='' />Encode</Link>
            </div>

            <div>
                <Link to='/home' className="btn btn-ghost normal-case text-xl">Home</Link>
                <Link to='/courses' className="btn btn-ghost normal-case text-xl">Courses</Link>
                <Link to='/faq' className="btn btn-ghost normal-case text-xl">FAQ</Link>
                <Link to='/blogs' className="btn btn-ghost normal-case text-xl">Blogs</Link>
            </div>
            <div>
                {
                    user?.uid ?
                        <>
                            <div className="tooltip tooltip-left" data-tip={user.displayName}>
                                <img className='rounded-full' src={user.photoURL} alt="" width={40} height={30} />
                            </div>
                            <Link onClick={logOut} className="btn btn-ghost normal-case text-xl">Log out</Link>
                        </>
                        :
                        <>
                            <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
                            <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
                        </>
                }
               
                
                <HiMoon/><input type="checkbox" className="toggle toggle-accent  " /><HiSun/>
            </div>
            
        </div>
    );
};

export default Nav;
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (

        <div className="navbar text-white bg-neutral text-neutral-content flex justify-between">
            <div >
                <Link to='/' className="btn btn-ghost normal-case text-xl">Encode</Link>
            </div>

            <div>
                <Link to='/courses' className="btn btn-ghost normal-case text-xl">Courses</Link>
                <Link to='/faq' className="btn btn-ghost normal-case text-xl">FAQ</Link>
                <Link to='/blogs' className="btn btn-ghost normal-case text-xl">Blogs</Link>
            </div>
            <div>
                <input type="checkbox" className="toggle toggle-md" />
            </div>
        </div>
    );
};

export default Nav;
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Encode</Link>
            </div>
            <div className="navbar bg-neutral text-neutral-content">
                <Link to='/courses' className="btn btn-ghost normal-case text-xl">Courses</Link>
            </div>
            <div className="navbar bg-neutral text-neutral-content">
                <Link to='/faq' className="btn btn-ghost normal-case text-xl">FAQ</Link>
            </div>
            <div className="navbar bg-neutral text-neutral-content">
                <Link to='/blogs' className="btn btn-ghost normal-case text-xl">Blogs</Link>
            </div>
        </div>
    );
};

export default Nav;
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { DetailsProvider } from '../../context/DetailsContext';


const Courses = () => {
    const { details } = useContext(DetailsProvider);
    const courses = useLoaderData([]);
    // const { title, price, rating } = courses;

    console.log(details);

    return (
        <div className='flex mt-4 ml-5'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 '>
                {
                    courses.map(course => <div className="card w-80 bg-base-100 shadow-2xl border-x-2 border-y-2 hover:border-slate-500 ">
                        <figure><img src={course.picture} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <p>Price: ${course.price}</p>
                                <p>Ratings: {course.rating}</p>
                            </div>
                            <h2 className="card-title">{course.title}</h2>              
                            <p><small><i>Mentor: {course.mentor}</i></small></p>            
                            <div className="card-actions justify-center ">
                                <Link to={`/course/${course.id}`}><button className="btn bg-slate-500">Course Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className='ml-5 bg-slate-400 pl-4 rounded-xl shadow-lg border-l-4 border-slate-700'>
                <h2 className='text-2xl text-center pb-5 text-slate-600 font-bold'>All Courses </h2>
                {
                    courses.map(course => <div className='pb-5 font-medium text-slate-700 hover:text-black'><Link to={`/course/${course.id}`}>{course.title}</Link></div>)
                }
            </div>
        </div>
    );
};

export default Courses;
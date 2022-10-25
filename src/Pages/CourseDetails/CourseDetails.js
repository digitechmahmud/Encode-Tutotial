import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';

import { DetailsProvider } from '../../context/DetailsContext';

const CourseDetails = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={data.picture} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{data.title}</h1>
                    <p className="py-6">{data.coursedetails}</p>
                    <button className="btn btn-primary">Back to courses</button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
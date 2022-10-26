import { Link, useLoaderData } from 'react-router-dom';
import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const CourseDetails = () => {
    const data = useLoaderData();



    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={data.picture} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button className='btn btn-success' onClick={toPdf}>Download Pdf</button>}
                    </Pdf>
                    <div ref={ref}>
                        <h1 className="text-5xl font-bold">{data.title}</h1>
                        <p className="py-6">{data.coursedetails}</p>
                    </div>

                    <Link to='/courses'><button className="btn btn-primary">Back to courses</button></Link>
                    <Link to={`/checkout/${data.id}`}><button className="btn btn-warning">Get Premium Access</button></Link>
                </div>
            </div>
        </div>
    );
};



export default CourseDetails;



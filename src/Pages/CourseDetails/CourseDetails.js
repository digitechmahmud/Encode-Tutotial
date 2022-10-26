import { Link, useLoaderData } from 'react-router-dom';


const CourseDetails = () => {
    const data = useLoaderData();

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={data.picture} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{data.title}</h1>
                    <p className="py-6">{data.coursedetails}</p>
                    <Link to='/courses'><button className="btn btn-primary">Back to courses</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
import { Link, useLoaderData } from 'react-router-dom';


const Courses = () => {
    const courses = useLoaderData([]);

    return (
        <div className='md:flex mt-4 ml-5 mb-5 auto-cols-max'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {
                    courses.map(course => <div className="card w-80 bg-base-100 shadow-2xl border-x-2 border-y-2 hover:border-slate-500 ">
                        <figure><img src={course.picture} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <p>Duration: {course.duration}</p>
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
            <div className='md:ml-5 bg-slate-400 pl-4 rounded-xl shadow-lg border-l-4 border-slate-700'>
                <h2 className='text-2xl text-center pb-5 text-slate-600 font-bold'>All Courses </h2>
                {
                    courses.map(course => <div className='pb-5 font-medium text-slate-700 hover:text-black'><Link to={`/course/${course.id}`}>{course.title}</Link></div>)
                }
            </div>
        </div>
    );
};

export default Courses;
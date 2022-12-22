import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../images/img1.png';
import carousal1 from '../../images/carousal1.jpg';

const Home = () => {
  
    return (
        <div>
            <div className="carousel w-full mb-4">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://raw.githubusercontent.com/digitechmahmud/images/main/carousal4.jpg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://raw.githubusercontent.com/digitechmahmud/images/main/carousal5.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://raw.githubusercontent.com/digitechmahmud/images/main/carousal6.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>
            <div className='flex align-middle justify-center mb-4'>
                <div>
                    <img className='p-10 rounded-full' width={400} height={300} src={img1} alt="" />
                </div>
                <div>
                    <h2 className='font-bold text-3xl md:text-6xl text-3xl mt-10'>Learn Coding Online<br /> With Professional Instructors</h2>
                    <Link to='/courses'><button className='btn bg-slate-500 font-bold mt-7'>Get Started</button></Link>
                </div>
                
            </div>
            <div className="hero min-h-screen bg-base-200 border-b-2 border-slate-500 mb-4">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://raw.githubusercontent.com/digitechmahmud/images/main/home2.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">We Provide The Best Course & Online Tutorial For You!</h1>
                        <p className="py-6">Encode has been used by more than 2 million people to develop their skills or for their careers, this site is entirely for purposes — Programming Courses
                            So Everyone can focus on what they are learning to be the best.</p>
                        <Link to='/courses'><button className="btn bg-slate-500">Get Started</button></Link>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default Home;
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const checkoutData = useLoaderData();

    const handleMessage = () => {
        toast.success('You are successfully enrolled! Welcome')
    }
    // console.log(checkoutData);
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full mx-auto mt-10 mb-20">
            <figure><img src={checkoutData.picture} alt="checkout" /></figure>
            <div className="card-body hover:bg-slate-800">
                <h2 className="card-title">{checkoutData.title}</h2>
                <h4 className="card-title"><small><i>Mentor: {checkoutData.mentor}</i></small></h4>
                <h4 className="card-title">Price: ${checkoutData.price}</h4>
                <div className="card-actions justify-end">
                    <button onClick={handleMessage} className="btn bg-slate-500">Payment</button>
                </div>
                
            </div>
            <Toaster/>
        </div>
    );
};

export default Checkout;
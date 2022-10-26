import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const checkoutData = useLoaderData();
    // console.log(checkoutData);
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full mx-auto mt-10 ">
            <figure><img src={checkoutData.picture} alt="checkout" /></figure>
            <div className="card-body hover:bg-slate-800">
                <h2 className="card-title">{checkoutData.title}</h2>
                <h4 className="card-title"><small><i>Mentor: {checkoutData.mentor}</i></small></h4>
                <h4 className="card-title">Price: ${checkoutData.price}</h4>
                <div className="card-actions justify-end">
                    <button className="btn bg-slate-500">Payment</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
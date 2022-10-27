import React from 'react';

const Faq = () => {
    return (
        <div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Life time access for course?
                </div>
                <div className="collapse-content">
                    <p>Yes</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How to start course on mobile?
                </div>
                <div className="collapse-content">
                    <p>Follow our instruction in our youtube channel</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How to find missing course?
                </div>
                <div className="collapse-content">
                    <p>Contact our Instructor</p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How do I get refund?
                </div>
                <div className="collapse-content">
                    <p>Yes! you can refund if you not satisfy to complete the course</p>
                </div>
            </div>
            <div tabIndex={4} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How changing account name?
                </div>
                <div className="collapse-content">
                    <p>Account name only change one time for security reason</p>
                </div>
            </div>
            <div tabIndex={5} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How to download course certificate?
                </div>
                <div className="collapse-content">
                    <p>After completing course you can download certificate from your profile</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;
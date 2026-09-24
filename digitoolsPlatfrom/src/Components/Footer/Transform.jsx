import React from 'react';

const Transform = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-10 gap-7 bg-linear-to-r from-[#4F39F6]  to-[#9514FA] py-17 text-white text-center'>
            <h2 className='text-5xl  font-bold'>Ready to Transform Your Workflow?</h2>
            <p className='text-2xl'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
            <div className="buttons flex gap-3.5">
                <button className='btn btn-accent rounded-full'>
                   Explore Products
                </button>
                <button className='btn btn-accent rounded-full'>
                    View Pricing
                </button>
            </div>
            <p className='text-2xl'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Transform;
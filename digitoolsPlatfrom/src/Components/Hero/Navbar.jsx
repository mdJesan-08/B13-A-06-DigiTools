import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-between">
                <div className="flex border border-4">
                    <a className="btn btn-ghost text-xl">DigiTools</a>
                </div>

                <div className="links hidden lg:flex justify-between items-center gap-3  text-2xl">
                    <p>Products</p>
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Testimonials</p>
                    <p>FAQ</p>
                </div>


                <div className='flex justify-between gap-1.5'>
                    {/* main cart icon import */}
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                        <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    
                    <button className='btn rounded-full'>
                        Login
                    </button>
                    <button className='btn rounded-full bg-linear-to-r from-[#4F39F6]  to-[#9514FA]'>
                        Get Started
                    </button>
                </div>
        </div>
    );
};

export default Navbar;
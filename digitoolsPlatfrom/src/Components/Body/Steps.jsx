import React from 'react';
import user from '../../assets/digiAssets/user.png';
const Steps = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-10 gap-7 bg-[#F9F9F9] py-17 text-black text-center'>
            <div className="descriptions">
                <h2 className='text-5xl font-bold text-center'>Get Started in 3 Steps</h2>

                <p className='text-2xl text-center'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className="cards flex flex-col lg:flex-row justify-center items-center gap-5 mt-10">

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body flex flex-col justify-center items-center gap-3.5">
                        <h3 className="card-title">Step 1</h3>
                        <img src={user} alt="user" className='w-10 h-10 rounded-full bg-violet-400 ' />
                        <h1 className='text-2xl font-bold' >Create an Account</h1>
                        <p className='text-center'>Sign up for free in seconds. <br />No credit card required to get started.</p>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body flex flex-col justify-center items-center gap-3.5">
                        <h3 className="card-title">Step 2</h3>
                        <img src={user} alt="user" className='w-10 h-10 rounded-full bg-violet-400 ' />
                        <h1 className='text-2xl font-bold' >Create an Account</h1>
                        <p className='text-center'>Sign up for free in seconds. <br />No credit card required to get started.</p>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body flex flex-col justify-center items-center gap-3.5">
                        <h3 className="card-title">Step 3</h3>
                        <img src={user} alt="user" className='w-10 h-10 rounded-full bg-violet-400 ' />
                        <h1 className='text-2xl font-bold' >Create an Account</h1>
                        <p className='text-center'>Sign up for free in seconds. <br />No credit card required to get started.</p>
                    </div>
                </div>


            </div>
            
        </div>
    );
};

export default Steps;
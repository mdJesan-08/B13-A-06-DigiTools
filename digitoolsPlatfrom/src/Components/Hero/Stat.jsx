import React from 'react';

const Stat = () => {
    return (

        <div className="bg-linear-to-r from-[#4F39F6]  to-[#9514FA] flex w-full flex-col lg:flex-row justify-between items-center px-10 py-5 text-white text-center">

            <div className="users">
                 <h2 className='font-bold text-5xl'>50K +</h2>
                 <p className='font-semibold text-2xl'>Active Users</p>
            </div>

            <div className="divider lg:divider-horizontal"></div>

             <div className="premium-tools">
                 <h2 className='font-bold text-5xl'>200+</h2>
                 <p className='font-semibold text-2xl'>Premium Tools</p>
             </div>

            <div className="divider lg:divider-horizontal"></div>

             <div className="ratings">
                 <h2 className='font-bold text-5xl'>4.9</h2>
                 <p className='font-semibold text-2xl'>Rating</p>
             </div>
        </div>
    );
};

export default Stat;
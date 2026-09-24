import React from 'react';
import banner from '../../assets/digiAssets/banner.png';
import { Play, CircleCheckBig } from 'lucide-react';
const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center gap-7 mb-7 mt-7'>

           {/* description */}
            <div className="description w-full min-w-0 flex flex-col justify-center gap-3">
                <p className='text-2xl bg-violet-300 max-w-full font-bold rounded-full flex flex-col lg:flex-row justify-start items-center gap-1.5 '>
                <CircleCheckBig />
                New AI-Powered Tools Available</p>
                <h2 className='text-4xl sm:text-5xl xl:text-6xlfont-bold'>
                    Supercharge Your <br />
                     Digital Workflow
                </h2>
                <p className='text-2xl text-gray-400 '>
                    Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today.
                </p >
                <div className="buttons flex flex-col lg:flex-row gap-2.5">
                    <button className='btn rounded-full bg-[#FF9900] text-black border-[#e17d00]'>Explore Products</button>
                    <button className='btn btn-outline rounded-full'>
                        <Play/>
                        Watch Video
                    </button>
                </div>
            </div>



            {/* banner image */}

            <div className="image  w-full max-w-lg flex justify-center items-center">
                <img src={banner} alt=""   className="w-full h-auto" />
            </div>
            
        </div>
    );
};

export default Banner;
import React from 'react';
import { House, Phone, ArrowRight } from 'lucide-react';

const End = () => {
    return (
        <div className='bg-[#101727] text-white p-17 px-20'>
            <div className="description-links flex flex-col lg:flex-row justify-between items-center  gap-3.5">
                <div className="digitools  flex flex-col  gap-3.5 ">
                    <h2 className="text-xl font-bold "> Digitools</h2>
                    <p>Premium digital tools for creators,<br />brands,
                    professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                </div>

                <div className="product ">
                    <h2 className='font-bold text-2xl'>Product</h2>
                    <p className=' text-xl'>Features</p>
                    <p className=' text-xl'>Templates</p>
                    <p className=' text-xl'>Pricing</p>
                    <p className=' text-xl'>Integrations</p>
                </div>

                <div className="product">
                    <h2 className='font-bold text-2xl'>Company</h2>
                    <p className=' text-xl'>About</p>
                    <p className=' text-xl'>Careers</p>
                    <p className='text-xl'>Press</p>
                    <p className=' text-xl'>Blog</p> 
                </div>

                <div className="product ">
                    <h2 className='font-bold text-2xl'>Resources</h2>
                    <p className=' text-xl'>Documentation</p>
                    <p className=' text-xl'>Help Center</p>
                    <p className=' text-xl'>Community</p>
                    <p className=' text-xl'>Contact</p>
                </div>

                <div className="social-links">
                    <h2 className='font-bold text-2xl'>Social Links</h2>
                    <div className="links flex gap-5 justify-center items-center mt-5">
                            <House />
                           <Phone />
                           <ArrowRight />
                    </div>
                </div>
            </div>
            <div class="divider divider-accent"></div>
            <div className="lincense flex justify-between">
                <p className=''>© 2026 Digitools. All rights reserved.</p>
                <div className="terms flex justify-between gap-5">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default End;
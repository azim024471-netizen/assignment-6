import React from 'react';

const PricingFooter = () => {
    return (
        <div className='px-50 py-30 bg-linear-to-br from-violet-600 via-purple-600 to-indigo-600 mx-auto space-y-10'>
            <div className='space-y-4 text-center'>
              <h2 className='font-extrabold text-5xl text-white'>Ready to Transform Your Workflow?</h2>
              <p className='text-white'>Join thousands of professionals who are already using Digitools to work smarter. <br /> 
              Start your free trial today.</p>
            </div>
             
             <div className='space-y-4'>
                <div className=' flex justify-center gap-4'>
                 <button className='bg-white text-purple-800 font-semibold py-4 w-40 rounded-full'> Explore Products</button>
                 <button className='text-white border bg-transparent font-semibold py-4 w-40 rounded-full'> Explore Products</button>
                </div>

                <div>
                    <p className= 'text-center text-white'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>

             </div>

        </div>
    );
};

export default PricingFooter;
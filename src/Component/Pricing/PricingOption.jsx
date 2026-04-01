import React, { use } from 'react';
import PricingCard from './PricingCard';
import PricingFooter from './PricingFooter';

const PricingOption = ({pricingPromise}) => {
    console.log(pricingPromise)

    const pricingData = use(pricingPromise)

    return (
                <div>
          <div className=' mx-auto text-center md:px-10 md:py-7 lg:px-50 lg:py-30 sm:px-4 sm:py-3 '>
            <div className='space-y-4 mb-10'>
                <h1 className='text-5xl font-extrabold '>Simple, Transparent Pricing</h1>
                <p className='text-gray-400'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                {
                   pricingData.map(pricing=> <PricingCard key={pricing.id} pricing={pricing}>

                    </PricingCard>)
                }

            </div>

        </div>

        <PricingFooter> </PricingFooter>

            </div>
             
             
    );
};

export default PricingOption;
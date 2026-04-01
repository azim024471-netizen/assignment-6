import React from 'react';

const PricingCard = ({pricing}) => {

    const {membership_type, description, price, period, features, button_text, populer } = pricing







//     {
//     "id": 1,
//     "membership_type": "Starter",
//     "description": "Perfect for getting started",
//     "price": "$0",
//     "period": "Month",
//     "features": [
//       "Access to 10 free tools",
//       "Basic templates",
//       "Community support",
//       "1 project per month"
//     ],
//     "button_text": "Get Started Free",
//     "popular": false
//   },

    return (
        <div className='flex flex-col border bg-amber-900 rounded-3xl p-6'>

            <div>
                <h1>{membership_type}</h1>
                <p>{description}</p>
            </div>
              

              <div className="mb-8 flex items-baseline">
          <span className="text-4xl font-bold ">{price}</span>
          <span className="text-[#627382] text-lg font-medium ml-1.5">
            /{period}
          </span>
        </div>

            <div>

            </div>
        

        <div>
            <button className='py-4 text-white w-full rounded-full bg-linear-to-r from-blue-600 to-purple-600'>{button_text} </button>
        </div>

            
        </div>
    );
};

export default PricingCard;
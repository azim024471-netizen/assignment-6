
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {

    const {membership_type, description, price, period, features, button_text, popular,id } = pricing


    return (
       <div className={`
    shadow-xl rounded-3xl p-6 space-y-8 relative overflow-hidden
    ${popular === true 
        ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white border-2 border-white/30' 
        : 'bg-white text-gray-900'
    }
`}>



             <div className='space-y-2'>
                <h1 className={`text-2xl text-left font-bold ${popular === true ? 
                    'text-white' : ''
                }`}>{membership_type}</h1>
                <p className={` text-left
                  ${popular === true ? 
                    'text-white' : 'text-gray-500'
                }
                     `}>{description}</p>
            </div> 

              <div className="mb-8 flex items-baseline">
          <span className="text-4xl font-bold ">{price}</span>
          <span className={` text-lg font-medium ml-1.5
          ${popular === true ? 
                    'text-white' : 'text-gray-500'
                }
            `}>
            /{period}
          </span>
        </div>

            <div className='space-y-2'>
             {
                features.map(feature=> <PricingFeatures key={id} popular={popular} feature={feature}> </PricingFeatures>)
             }
            </div>

        <div>
            <button
     className={`py-4  w-full font-bold rounded-full 
        ${popular === true ? 'bg-white text-purple-800': 'bg-linear-to-r from-blue-600 to-purple-600 text-white'}
      `} >
                {button_text} </button>
        </div>
 
        </div>
    );
};

export default PricingCard;
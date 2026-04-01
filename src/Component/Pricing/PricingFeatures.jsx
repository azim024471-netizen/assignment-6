import React from 'react';

import checkIcon from '../../assets/Check.png';

const PricingFeatures = ({feature}) => {
    return (
         <div className="flex items-center gap-1">
            <img src={checkIcon} alt="check" className="w-5 h-5 object-contain" />
            <p className="text-gray-600 font-medium"> {feature} </p>
        </div>
    );
};

export default PricingFeatures;
import React from 'react';

import checkIcon from '../../assets/Check.png';

const PricingFeatures = ({feature,popular}) => {

    return (
         <div className="flex items-center gap-1">
            <img src={checkIcon} alt="check" className="w-5 h-5 object-contain" />
            <p className={` font-medium ${
                popular === true ? "text-white" : "text-gray-600"
            }`}> {feature} </p>
        </div>
    );
};

export default PricingFeatures;
import React from 'react';

const StepsPath = ({step}) => {
    return (
       <div
          className="relative w-95 h-95 bg-white rounded-xl px-6 py-22 text-center shadow-sm mx-auto items-center
           hover:shadow-md "
        >
          
          <div className="absolute top-5 right-5 bg-linear-to-r font-bold from-blue-600 to-purple-600 text-white text-[14px] 
          w-10 h-10 flex items-center justify-center rounded-full">
            {step.id}
          </div>

          <div className="flex justify-center  mb-4">
            <img
              src={step.img}
              alt=""
              className="w-20 h-20 bg-purple-300 p-5 rounded-full"
            />
          </div>

          <h2 className="text-lg font-semibold mb-2">{step.title}</h2>

          
          <p className="text-gray-500 text-sm">{step.desc}</p>
        </div>
    );
};

export default StepsPath;
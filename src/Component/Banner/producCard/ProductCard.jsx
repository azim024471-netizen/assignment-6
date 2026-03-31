import Features from "./Features";


const ProductCard = ({product}) => {
    console.log(product)

    const {name,description,price,period,tag,features,icon}=product

    return (

      <div className="bg-white border border-gray-100 rounded-[16px] p-6 shadow-sm hover:shadow-xl transition-all duration-300
       relative flex flex-col h-full ">
   
      <div className="flex justify-between items-start mb-6">
       
        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center border border-gray-50 shadow-inner">
          <img src={icon} alt="" />
        </div>
        
       <p
    className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide ${
      tag === "Best Seller"
        ? "bg-[#FFEDD5] text-[#C2410C]"
        : tag === "Popular"
        ? "bg-[#E0E7FF] text-purple-700" 
        : tag === "New"
        ? "bg-[#DCFCE7] text-[#15803D]"
        : "bg-gray-100 text-gray-600"
    }`}
  >
    {tag}
  </p>
    
      </div>

      
      <div >
        <h3 className="text-[24px] font-bold  mb-3">

          {name}
        </h3>
        <p className="text-gray-500 text-  mb-7">
          {description}
        </p>

        
        <div className="mb-8 flex items-baseline">
          <span className="text-4xl font-bold ">{price}</span>
          <span className="text-[#627382] text-lg font-medium ml-1.5">
            /{period}
          </span>
        </div>

       
        <ul className="space-y-4.5 mb-10">
          {features.map((feature, index) => <Features key={index} feature={feature} > </Features>)}
        </ul>
      </div>

      
      <button className="w-full bg-purple-800 hover:bg-[#A855F7] text-white py-4 rounded-full font-bold text-lg 
       shadow-lg shadow-[#E9D5FF] ">
        Buy Now
      </button>
    </div>
  );
};
    
export default ProductCard;
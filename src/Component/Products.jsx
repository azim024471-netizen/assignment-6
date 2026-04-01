import React, { use , useState} from 'react';
import ProductCard from './Banner/producCard/ProductCard';
import Cart from './Cart/Cart';

const Products = ({productsPromise}) => {
    const productsData = use(productsPromise);
    // console.log(productsData)

    const [activeTab, setActiveTab] = useState("Products");
    // console.log(activeTab)
    const [carts, setCarts] = useState([]);

    console.log(carts)

    


    return (
        <div className='pt-5 space-y-10'>
            <div className="text-center space-y-5 ">
        <h2 className="text-5xl font-extrabold">Premium Digital Tools</h2>
        <p className='text-gray-500'>One subscription gives you access to all frontier AI models</p>

         
         {/* tab toggole  */}

     <div className="tabs tabs-box justify-center bg-white">
   <input  onClick={() => setActiveTab("Products")} type="radio" 
   name="my_tabs_1" className="tab rounded-full w-30 font-bold" aria-label=" Products" defaultChecked />
   <input  onClick={() => setActiveTab("Cart")} type="radio"
   name="my_tabs_1" className="tab rounded-full w-30 font-bold  " aria-label="Cart (2)" />
  
</div>


      </div>
      
      {/* card container */}
    { activeTab === "Products" && (<div className="grid  md:grid-cols-2  lg:grid-cols-3 gap-5 mt-10 lg:px-50">
        {
            productsData.map(product=> <ProductCard key={product.id}  product={product}
                carts={carts} setCarts={setCarts}
            ></ProductCard>)
        }
        
      </div>) }
          
          {activeTab === "Cart" && <Cart carts={carts} setCarts={setCarts}  ></Cart>}




        </div>
    );
};

export default Products;
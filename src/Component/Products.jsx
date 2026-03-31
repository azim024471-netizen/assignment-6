import React, { use } from 'react';
import ProductCard from './Banner/producCard/ProductCard';

const Products = ({productsPromise}) => {
    const productsData = use(productsPromise);
    // console.log(productsData)
    return (
        <div className='pt-5'>
            <div className="text-center ">
        <h2 className="text-5xl font-extrabold">Premium Digital Tools</h2>
        <p className='text-gray-500'>One subscription gives you access to all frontier AI models</p>

      </div>
      
      {/* card container */}
      <div className="grid  md:grid-cols-2  lg:grid-cols-3 gap-5 mt-10 px-50">
        {
            productsData.map(product=> <ProductCard key={product.id} product={product}></ProductCard>)
        }
        
      </div>



        </div>
    );
};

export default Products;
import { toast } from "react-toastify";
import CartItem from "./CartItem";


const Cart = ({ carts, setCarts })=> {
const totalPrice = carts.reduce((sum, item) => sum + parseFloat(item.price), 0);

const handelCheakout = () =>{
    setCarts([]);
    toast.success("Successfully cheak out!!")
}

    
const handleRemove = (id) => {
        const remaining = carts.filter(item => item.id !== id);
        setCarts(remaining);
       toast.success("Item Removed  !!")
    };


    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-3xl border border-blue-100 shadow-sm mt-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h2>
            
         {carts.length === 0 ? <p className="text-center py-10">Empty Cart</p> : (
               <div className="space-y-4">
                 {carts.map(item =>  <CartItem item={item} handleRemove={handleRemove}></CartItem>  )}
                    
                    <div className="flex justify-between items-center pt-6 border-t mt-6">
                        <span className="text-xl font-medium text-gray-500">Total:</span>
                        <span className="text-2xl font-bold text-gray-800">${totalPrice}</span>
                    </div>

                    <button onClick={handelCheakout} className="w-full bg-purple-600 text-white py-4 rounded-2xl font-bold text-lg mt-4 hover:bg-purple-700 transition-all">
                        Proceed To Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

    



export default Cart;
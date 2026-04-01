

const CartItem = ({item,handleRemove}) => {

    
    
    return (
       <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border
        border-gray-100 px-5 py-6">
                            <div className="flex items-center gap-4">
                                <img src={item.icon} className="w-12 h-12" alt="" />
                                <div>
                                    <h4 className="font-bold text-gray-800">{item.name}</h4>
                                    <p className="text-sm text-gray-500">${item.price}</p>
                                </div>
                            </div>
        <button onClick={() => handleRemove(item.id)} className="text-red-500 font-bold">Remove</button>
                        </div>
    );
};

export default CartItem;
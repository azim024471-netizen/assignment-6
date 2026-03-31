

const ProductCard = ({product}) => {
    console.log(product)

    const {name,description,price,period,tag,features,icon}=product
    return (
        <div>
            <h1>hello</h1>
            <p>{icon}</p>
        </div>
    );
};

export default ProductCard;
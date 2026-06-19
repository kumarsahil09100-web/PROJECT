function Product({ name, price, image }) {
    return (
      <div className="product">
        <img src={image} alt={name} />
  
        <h3>{name}</h3>
  
        <p>₹{price}</p>
  
        <button>Add To Cart</button>
      </div>
    );
  }
  
  export default Product;
export const CartProduct = (props) => {
  const product = props.details;
  return (
    <div id="cart-product-block">
      <div id="cart-product-img-block">
        <img src={product.image} alt="Product" />
      </div>
      <div id="cart-product-details">
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <p>Quantity : {product.quantity}</p>
        <p>
          Price : <strong>${product.quantity * product.price}</strong>
        </p>
      </div>
    </div>
  );
};

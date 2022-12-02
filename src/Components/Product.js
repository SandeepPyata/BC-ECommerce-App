import React from "react";
const productImageLink =
  "https://image.shutterstock.com/image-photo/stylish-stainless-thermo-bottles-on-260nw-1914561409.jpg";

function SingleProduct(props) {
  return (
    <>
      <img src={productImageLink} alt="Single-Product" />
      <div id="single-product-description">
        <h4>{props.details.name}</h4>
        <p>{props.details.description}</p>
        <p>
          Price : <strong>{props.details.price}</strong>
        </p>
        <p>In Stock</p>
        <button type="button" id="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </>
  );
}

const Product = () => {
  const description = {
    name: "Bottle",
    description: "Bottle description",
    price: "$ 310",
  };

  return (
    <div id="product-page-block">
      <SingleProduct details={description} />
    </div>
  );
};
export default Product;

import React from "react";

const productImageLink =
  "https://image.shutterstock.com/image-photo/stylish-stainless-thermo-bottles-on-260nw-1914561409.jpg";

function SingleProduct(props) {
  return (
    <div id="homepage-single-product">
      <img src={productImageLink} alt="Product" />
      <div id="product-description">
        <h4>{props.details.name}</h4>
        <p>{props.details.description}</p>
        <p>
          Price : <strong>{props.details.price}</strong>
        </p>
      </div>
    </div>
  );
}

const Home = () => {
  const description = {
    name: "Bottle",
    description: "Bottle description",
    price: "$ 310",
  };

  return (
    <div id="homepage-block">
      <div id="homepage-navbar">
        <h2>Products</h2>
        <button type="button">Create Product</button>
      </div>
      <div id="home-products-block">
        <SingleProduct details={description} />
        <SingleProduct details={description} />
        <SingleProduct details={description} />
        <SingleProduct details={description} />
        <SingleProduct details={description} />
        <SingleProduct details={description} />
      </div>
    </div>
  );
};
export default Home;

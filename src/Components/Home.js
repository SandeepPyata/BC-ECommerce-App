import React from "react";
import useProductsData from "../hooks/useProductsData";

function SingleProduct({ Item }) {
  return (
    <div id="homepage-single-product">
      <div id="homepage-single-product-image">
        <img src={Item.image} alt="Product" />
      </div>
      <div id="product-description">
        <h4>{Item.name}</h4>
        <p>{Item.description}</p>
        <p>
          Price : <strong>$ {Item.price}</strong>
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const { data, isLoading } = useProductsData();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div id="homepage-block">
      <div id="homepage-navbar">
        <h2>Products</h2>
        <button type="button">Create Product</button>
      </div>
      <div id="home-products-block">
        {data?.data.map((product) => (
          <SingleProduct key={product.id} Item={product} />
        ))}
      </div>
    </div>
  );
}
// export default Home;

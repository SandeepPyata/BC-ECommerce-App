import React, { useState } from "react";
import useProductData from "../hooks/useProductData";
import { useParams } from "react-router-dom";
function SingleProduct(props) {
  const [imageLink, setImageLink] = useState(props.details.image);
  function handleDetails(variant) {
    if (variant === "Grey") {
      setImageLink((prevDetails) => (prevDetails = variant.image));
    } else {
      setImageLink((prevDetails) => (prevDetails = variant.image));
    }
  }

  const quantity = props.details.quantity;
  return (
    <>
      <img src={imageLink} alt="Single-Product" />
      <div id="single-product-description">
        <h4>{props.details.name}</h4>
        <p>{props.details.description}</p>
        <p>
          Price : $ <strong>{props.details.price}</strong>
        </p>
        <p>In Stock</p>
        <p>
          Quantity :{" "}
          {quantity > 10
            ? "available"
            : quantity === 0
            ? "unavailable"
            : "selling fast"}
        </p>
        <div id="product-variants">
          <button
            id="product-variant"
            style={{ backgroundColor: "grey" }}
            onClick={() => handleDetails(props.details.variants[0])}
          ></button>
          <button
            id="product-variant"
            style={{ backgroundColor: "Blue" }}
            onClick={() => handleDetails(props.details.variants[1])}
          ></button>
        </div>
        <button type="button" id="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </>
  );
}

const Product = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useProductData(id === ":id" ? 1 : id);
  if (isLoading || isFetching) return <div>Loading...</div>;
  return (
    <div id="product-page-block">
      <SingleProduct details={data?.data} />
    </div>
  );
};
export default Product;

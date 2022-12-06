import React from "react";
import useProductData from "../hooks/useProductData";
import { useParams } from "react-router-dom";

function SingleProduct(props) {
  console.log(props);
  return (
    <>
      <img src={props.details.image} alt="Single-Product" />
      <div id="single-product-description">
        <h4>{props.details.name}</h4>
        <p>{props.details.description}</p>
        <p>
          Price : $ <strong>{props.details.price}</strong>
        </p>
        <p>In Stock</p>
        <p>Quantity : ${props.details.quantity}</p>
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
  console.log("ID : ", id);
  return (
    <div id="product-page-block">
      <SingleProduct details={data?.data} />
    </div>
  );
};
export default Product;

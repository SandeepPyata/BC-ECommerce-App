import React from "react";
import useProductData from "../hooks/useProductData";
import { useParams } from "react-router-dom";
import "../styles/product-page.css";
import { IndividualProduct } from "./IndividualProduct";

const Product = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useProductData(id);
  if (isLoading || isFetching) return <div>Loading...</div>;
  return (
    <div id="product-page-block">
      <IndividualProduct details={data?.data} />
    </div>
  );
};
export default Product;

import React from "react";
import "../styles/homepage.css";
import useProductsData from "../hooks/useProductsData";
import { HomePageProduct } from "./HomePageProduct";

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
          <HomePageProduct key={product.id} Item={product} />
        ))}
      </div>
    </div>
  );
}

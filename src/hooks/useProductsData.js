// List products - https://bdcf43c4-e7fc-42dd-beb7-edca7bdedd4a.mock.pstmn.io/products

import axios from "axios";
import { useQuery } from "react-query";

function fetchProducts() {
  return axios.get(
    "http://localhost:4000/products"
    // `https://bdcf43c4-e7fc-42dd-beb7-edca7bdedd4a.mock.pstmn.io/products`
  );
}

const useProductsData = () => {
  return useQuery("products", fetchProducts);
};

export default useProductsData;

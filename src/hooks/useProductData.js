// For each product - https://bdcf43c4-e7fc-42dd-beb7-edca7bdedd4a.mock.pstmn.io/products/1

import axios from "axios";
import { useQuery } from "react-query";

function fetchProduct({ queryKey }) {
  let prodID = queryKey[1];
  return axios.get(
    `http://localhost:4000/products/${prodID}`
    // `https://bdcf43c4-e7fc-42dd-beb7-edca7bdedd4a.mock.pstmn.io/products/${prodID}`
  );
}

const useProductData = (id) => {
  return useQuery(["products", id], fetchProduct);
};

export default useProductData;

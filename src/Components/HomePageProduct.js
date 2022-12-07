import { useNavigate } from "react-router-dom";

export const HomePageProduct = ({ Item }) => {
  // Navigating when clicked on item
  const navigate = useNavigate();
  const handleRouteChange = () => {
    const path = `/products/${Item.id}`;
    navigate(path);
  };

  return (
    <div id="homepage-single-product" onClick={handleRouteChange}>
      <div id="homepage-single-product-image">
        <img src={Item.image} alt="Product" />
      </div>
      <hr />
      <div id="product-description">
        <h4>{Item.name}</h4>
        <p>{Item.description}</p>
        <p>
          Price : <strong>$ {Item.price}</strong>
        </p>
      </div>
    </div>
  );
};

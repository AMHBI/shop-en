import React from "react";
//routing
import { Link } from "react-router-dom/cjs/react-router-dom.min";
//context
import { useContext } from "react";
import { ProductsContext } from "../Context/ProductContextProvider";
//Styles:
import styles from "./ProductDetails.module.css";

const ProductDetails = (props) => {

  const id = props.match.params.id;
  const data = useContext(ProductsContext);
  const product = data[id - 1];
  const { image, title, description, price, category } = product;

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.category}><span>Category :</span> {category}</p>
        <div className={styles.buttonContainer}>
          <span className={styles.price}>{price} $</span>
          <br />
          <Link to='/products'> Back to Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

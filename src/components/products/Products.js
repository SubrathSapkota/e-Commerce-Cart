import React from "react";
import styles from "./product.module.css";
import TV from "../../assets/productImage/TV.jfif";

import { useDispatch } from "react-redux";
import { addtocart } from "../../redux/action";

const Products = () => {
  const products = [
    { id: 1, name: "T-Shirt", price: 19.99, image: TV, quantity: 100 },
    { id: 2, name: "Jeans", price: 49.99, image: TV, quantity: 80 },
    { id: 3, name: "Sneakers", price: 89.99, image: TV, quantity: 120 },
    { id: 4, name: "Watch", price: 199.99, image: TV, quantity: 65 },
    { id: 5, name: "Baseball Cap", price: 14.99, image: TV, quantity: 150 },
    { id: 6, name: "Backpack", price: 59.99, image: TV, quantity: 90 },
    { id: 7, name: "Belt", price: 24.99, image: TV, quantity: 110 },
    { id: 8, name: "Sunglasses", price: 29.99, image: TV, quantity: 140 },
    { id: 9, name: "Hoodie", price: 44.99, image: TV, quantity: 85 },
    { id: 10, name: "Jacket", price: 99.99, image: TV, quantity: 75 },
    { id: 11, name: "Dress Shirt", price: 39.99, image: TV, quantity: 95 },
    { id: 12, name: "Socks (pair)", price: 4.99, image: TV, quantity: 300 },
    { id: 13, name: "Scarf", price: 16.99, image: TV, quantity: 200 },
    { id: 14, name: "Gloves", price: 21.99, image: TV, quantity: 120 },
    { id: 15, name: "Shorts", price: 29.99, image: TV, quantity: 100 },
    { id: 16, name: "Sandals", price: 24.99, image: TV, quantity: 150 },
    { id: 17, name: "Hat", price: 14.99, image: TV, quantity: 170 },
    { id: 18, name: "Wristband", price: 9.99, image: TV, quantity: 250 },
    { id: 19, name: "Tie", price: 19.99, image: TV, quantity: 140 },
    { id: 20, name: "Wallet", price: 34.99, image: TV, quantity: 130 }
];


  const dispatch = useDispatch();
  return (
    <>
      <h1>Products</h1>
      <div className={styles.gridContainer}>
        {products.map((product) => (
          <div key={product.id} className={styles.product}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button onClick={() => dispatch(addtocart(product.id,product.name,product.image,product.price,product.quantity))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;

// src/components/ProductCard.js
import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => (
    <div className={styles.card}>
        <div className={styles.imageWrapper}>
            <img src={product.image} alt={product.title} className={styles.image} />
            {product.isNew && <span className={styles.badge}>NEW PRODUCT</span>}
            {product.outOfStock && <span className={styles.outOfStock}>OUT OF STOCK</span>}
        </div>
        <div className={styles.info}>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>Sign in or Create an account to see pricing</div>
            <button className={styles.wishlist}>♡</button>
        </div>
    </div>
);

export default ProductCard;

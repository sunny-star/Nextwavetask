// src/components/ProductGrid.js
import React from 'react';
import ProductCard from './ProductCard';
import styles from '../styles/ProductGrid.module.css';

const ProductGrid = ({ products }) => (
    <div className={styles.grid}>
        {products.map(product => (
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
);

export default ProductGrid;

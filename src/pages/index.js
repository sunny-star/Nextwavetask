import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import SidebarFilters from '../components/SidebarFilters';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import '../styles/globals.css';

const IndexPage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(setProducts);
    }, []);
    return (
        <>
            <Navbar />
            <div style={{ display: 'flex', minHeight: '80vh' }}>
                <SidebarFilters />
                <main style={{ flex: 1, padding: '2rem' }}>
                    <h2>DISCOVER OUR PRODUCTS</h2>
                    <ProductGrid products={products} />
                </main>
            </div>
            <Footer />
        </>
    );
};
export default IndexPage;

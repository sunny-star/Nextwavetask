import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SidebarFilters from '../components/SidebarFilters';
import FilterSortBar from '../components/FilterSortBar';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

const PLP = () => {
    const [filtersVisible, setFiltersVisible] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch real products from FakeStoreAPI
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <>
            <Navbar />
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem 0' }}>
                <h1 style={{
                    textAlign: 'center', fontWeight: 600, fontSize: '2.4rem', letterSpacing: '0.04em', margin: '2rem 0 0.6rem 0'
                }}>DISCOVER OUR PRODUCTS</h1>
                <p style={{
                    textAlign: 'center', color: '#888', marginBottom: '2.5rem', fontSize: '1.1rem'
                }}>
                    Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet id at elementum dolor.
                </p>
                <FilterSortBar
                    itemCount={products.length}
                    onToggleFilters={() => setFiltersVisible(v => !v)}
                    filtersVisible={filtersVisible}
                    sort="recommended"
                    setSort={() => { }}
                />
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <SidebarFilters visible={filtersVisible} />
                    <div style={{ flex: 1, paddingLeft: filtersVisible ? '2rem' : 0 }}>
                        <ProductGrid products={products} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PLP;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Feature from './components/Feature';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData } from './components/Products/data';
import { GlobalStyle } from './globalStyles';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Hero />
                <Products heading="Choose your favorite" data={productData} />
                <Feature />                
            </Router>
        </>
    )
}

export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import { GlobalStyle } from './globalStyles';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Hero />
            </Router>
        </>
    )
}

export default App;

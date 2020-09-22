import React from 'react';

import Header from './componentes/header/Header'
import Search from './componentes/search/Search'
import Home from './componentes/home/Home'
import Footer from './componentes/footer/Footer'

export default function App() {
    return (
        <div className = "App">
            <Header />
            <Search />
            <Home />
            <Footer />
        </div>
       
    );
}


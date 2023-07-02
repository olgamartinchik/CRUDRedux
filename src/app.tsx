import React from 'react';
import logo from './assets/icons/logo.svg';
import {SApp, SHeader, SLink, SLogo} from "./assets/styles/app.styles";
import  ProductCard from './components/product/card/product-card.component'
import {productListData} from './data/product.data'
function App() {
    return (
        <SApp>
            <ProductCard {...productListData[0]}/>
        </SApp>
      
    );
}

export default App;

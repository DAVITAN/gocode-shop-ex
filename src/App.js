import Header from "./components/Header";
import Products from "./components/Products";
import {uniqBy} from "lodash";
import React, {useEffect, useMemo, useState} from "react";
import {BrowserRouter as Router, Link, Route, Switch, useParams} from 'react-router-dom'
import ProductsContext from "./contexts";
import ProductDetails from './Pages/ProductDetails'
import Product from "./components/Product";
import {Button, Slider} from 'antd';
import 'antd/dist/antd.css';


function App() {
    const [products, setProducts] = useState([]);
    const [topPrice, setTopPrice] = useState(100000);
    const onSliderChange = (input)=>{
        setTopPrice(input);
    };
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((json) => setProducts(json));
    }, []);


    // return (
    //   <ProductsContext.Provider value={{ products, filters, filter, setFilter }}>
    //     <div>
    //       <Header />
    //       <Products />
    //     </div>
    //   </ProductsContext.Provider>

    return (
        <div>
            <Button >fefe</Button>
            
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            {products ? products.map(product => (
                                <li>
                                    <Link key={product.id} to={`/product/${product.id}`}> {product.title} </Link>
                                </li>
                            )) : <div>Loading... </div>}
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/home">
                            <ProductsContext.Provider value={{products, topPrice}}>
                                <Products/>
                            </ProductsContext.Provider>
                        </Route>
                        {products && (
                            <Route path={"/product/:pid"} children={<ProductDetails/>}>
                            </Route>
                        )}
                    </Switch>
                </div>
            </Router>
        </div>

    );
}

export default App;

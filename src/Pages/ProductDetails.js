import Product from "../components/Product";
import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'

function ProductDetails() {
    let {pid} = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${pid}`)
            .then((response) => response.json())
            .then((json) => setProduct(json));
    }, [pid]);
    const {id, image, title, price} = product;
    return (
        <Product key={id} img={image} title={title} price={"$" + price}/>
    )
}

export default ProductDetails;

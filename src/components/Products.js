import Product from "./Product";
import React, { useContext } from "react";
import ProductsContext from "../contexts";

function Products() {
  const { products, topPrice } = useContext(ProductsContext);
  return (
    <section className="products">
      {products
        .filter((product) => !topPrice || product.price < topPrice)
        .map(({ id, image, title, price }) => (
          <Product key={id} img={image} title={title} price={"$" + price} />
        ))}
    </section>
  );
}

export default Products;

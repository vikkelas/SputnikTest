import React from "react";
import ProductList from "./ProductList";
import style from './Product.module.sass';

const Products = () => {
  return (
    <section className={style.product}>
      <h2>Список товаров</h2>
      <ProductList/>
    </section>
  );
};

export default Products;
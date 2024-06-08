import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../../redux/reducers/productSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Spin } from "antd";
import { LoadStatus } from "../../interface/Enums";
import style from './Product.module.sass';

const ProductList = () => {
  const dispatch = useAppDispatch();
  const {loadStatus, error, products} = useAppSelector(state => state.product)
  console.log({loadStatus, error, products})
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
  return (
    <Spin spinning={loadStatus===LoadStatus.LOADING}>
      <ul className={style.productList}>
        {Boolean(products.length)&&products.map((item) => <ProductCard product={item} key={item.id}/>)}
      </ul>
    </Spin>
  );
};

export default ProductList;
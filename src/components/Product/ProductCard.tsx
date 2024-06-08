import React from "react";
import { Card, Flex } from "antd";
import Price from "../Assets/Price/Price";
import { ProductI } from "../../interface/ProductInterface";
import ColorList from "../Assets/ColorList/ColorList";
import OtherParams from "../Assets/OtherParams/OtherParams";
import style from './Product.module.sass';

const ProductCard: React.FC<{ product: ProductI }> = ({ product }) => {
  const {
    id,
    name,
    type,
    price,
    sale,
    installmentPlan,
    color,
    ...otherParams
  } = product;
  return (
    <li className={style.productCard}>
      {type==="Продукты"&&<span className={style.productCardPromotion}>Акция</span>}
      <Card title={name}>
        <div className={style.productCardParams}>
          <Flex vertical gap={'10px'}>
            <span>Категория: {type}</span>
            {color?.length ? <ColorList colors={color} /> : null}
            <OtherParams params={otherParams} />
          </Flex>
          <Price price={price} installmentPlan={installmentPlan} sale={sale} />
        </div>
      </Card>
    </li>
  );
};

export default ProductCard;
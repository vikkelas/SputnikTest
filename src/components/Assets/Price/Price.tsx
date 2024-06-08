import React from "react";
import {Flex} from "antd";
import style from './Price.module.sass';
import clsx from "clsx";

type PriceProps = {
  price: number;
  sale: number;
  installmentPlan: boolean;
}
const Price:React.FC<PriceProps> = (props, deprecatedLegacyContext) => {
  const {price, sale, installmentPlan} = props;
  const priceSale = Boolean(sale)?Math.trunc(price-price/100*sale):null;
  return (
    <Flex vertical className={style.price}>
      <Flex justify={"space-between"} align={"center"}>
        <span>Цена:</span>
        <Flex gap={"10px"}>
          <span className={clsx([priceSale&&style.oldPrice])}>{price}₽</span>
          {Boolean(priceSale)&&<span className={style.salePrice}>{priceSale}₽</span>}
        </Flex>
      </Flex>
      {installmentPlan&&
        <Flex justify={"space-between"} align={"center"}>
          <span>В рассрочку:</span>
          <span>{Math.trunc(priceSale?(priceSale/12):(price/12))}₽ в месяц</span>
        </Flex>
      }
    </Flex>
  );
};

export default Price;
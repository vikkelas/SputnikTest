import React from "react";
import {Flex} from "antd";
import style from './OtherParams.module.sass';

const OtherParams:React.FC<{ params: Record<string, string|string[]|null> }> = ({params}) => {
  const titleParams:Record<string, string> = {
    size: "Размер",
    power: "Мощность",
    dateOfManufacture: "Дата изготовления",
    bestBeforeDate: "Срок годности"
  }

  const renderItem = (key: string, value: string|string[])=>{
    if(Array.isArray(value)){
      return(
        <Flex gap={'5px'}>
          {value.map((item, index)=><span key={`${key}-${index}`}>{item}</span>)}
        </Flex>
      )
    }else {
      return(<span>{value}</span>);
    }
  }

  return (
    <Flex vertical gap={"10px"}>
      {Object.entries(params).map(([key, value], index) => {
        if(value){
          return(
            <Flex className={style.params} justify={'space-between'} align={'center'}>
              <span>{titleParams[key]}</span>
              {renderItem(key, value)}
            </Flex>
          )
        }
        return null;
      })}
    </Flex>
  );
};

export default OtherParams;
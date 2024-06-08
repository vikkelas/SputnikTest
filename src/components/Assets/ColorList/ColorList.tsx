import React from "react";
import style from "./ColorList.module.sass";

const ColorList: React.FC<{ colors: string[] }> = ({ colors }) => {
  return (
    <div className={style.colors}>
      <span>Цвет: </span>
      <ul className={style.colorsList}>
        {colors.map((color, index) => (
          <li key={index} className={style.colorsListItem} style={{ backgroundColor: `${color}` }} />))}
      </ul>
    </div>

  );
};

export default ColorList;
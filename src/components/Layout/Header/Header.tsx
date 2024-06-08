import React from "react";
import style from './Header.module.sass'

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.headerLogo}>
        <img src="/images/logo.png" alt="logo"/>
      </div>
      <h2>Test SPUTNIK</h2>
    </header>
  );
};

export default Header;
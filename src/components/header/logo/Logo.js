import Link from "next/link";
import React from "react";
import style from "./Logo.module.scss"


const Logo = ({ children, ...restProps }) =>{
  return (
    <div>
      <Link href="/" >
      <a {...restProps} >
        {children}
        <img  className={style.Image}  src="/images/logo_greenote.png" alt="Greenote logo" />
      </a>
      </Link>
    </div>
  );
}


export default Logo;

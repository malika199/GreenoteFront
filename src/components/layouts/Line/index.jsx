import React from "react";
import styles from "./index.module.scss";
import {BsGrid3X3GapFill} from 'react-icons/bs';


const Index = () => {
  return <div className={styles.new}>
    <h1 className={styles.text3} > Type a page title… </h1>
    <div className={styles.icon}>
    <BsGrid3X3GapFill/>
    </div> 


  </div>
  
};

export default Index;

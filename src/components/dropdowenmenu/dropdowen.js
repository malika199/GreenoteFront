import Link from "next/link";

import style from "./drop.module.scss"


import React, {useState, useEffect, useRef} from 'react';

function DropdowenMenu() {

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <div className={style.scroller}>
    <div className={style.dropdownmenu}>
      <div className={style.menucontainer} ref={menuRef}>
        <div className={style.menutrigger} onClick={()=>{setOpen(!open)}}>
          {/* <img src={user}></img> */}
        </div>
        <button className={style.iconButton} onClick={()=>{setOpen(!open)}}>Menu</button>
        {open &&
        <div className={`dropdownmenu ${open? 'active' : 'inactive'}`} >
         
          <ul>
            <DropdownItem text = {"Gras"}/>
            <DropdownItem text = {" Italique"}/>
            <DropdownItem text = {"surlignement"}/>
            <DropdownItem text = {"listes à puces"}/>
            <DropdownItem text = {"insertion de liens"}/>

            <div className={style.select}>
              <select className={style.select1}>
                <option value="">Couleurs</option>
                <option value="1">Center</option>
                <option value="2">Droite</option>
                <option value="3">Gauche</option>
              </select>
            </div>
            <DropdownItem text = {"Paragraph"}/>
            
            <DropdownItem text = {" mise en avant de lignes codes "}/>
            <div className={style.select}>
              <select className={style.select1}>
                <option value="">Alignement</option>
                <option value="1">Center</option>
                <option value="2">Droite</option>
                <option value="3">Gauche</option>
              </select>
            </div>
            <DropdownItem text = {"Delete"}/>
            
          </ul>
          
        </div>
       
        
        }
      </div>
    </div>
    </div>
  );
}



function DropdownItem(props){
  return(
    <li className = {style.dropdownItem}>      
      <a> {props.text} </a>
     
    </li>
  );
}
export default DropdowenMenu;
 
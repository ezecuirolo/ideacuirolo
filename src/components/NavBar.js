import React from 'react';
import LogoQwines from './LogoQwines';
import CartWidget from './CartWidget';

const NavBar = props => {
    //I have to loop all the items and convert them into LIs
    const items = props.items.map(item => (
      <li className="nav-item">
        <a className="nav-link" href={item.url}>
          {item.label}
        </a>
      </li>
    ));
  
    //this methods says how the NavBar should look like in HTML
    return (
      <>
      <nav className="navbar">
        <ul>{items}</ul>
      </nav>
      <CartWidget/>
      </>
    );
  
  };
  // declare a JS array with the menu items that you want
  let menu = [
    { label: "Vinos", url: "/vinos" },
    { label: "Olivas", url: "/olivas" },
    { label: "Espumantes", url: "/espumantes" },
    { label: "Aperitivos", url: "/aperitivos" },
    { label: "Delicatessen", url: "/delicatessen" }
  ];
  const Componente = () => {
    return (<><LogoQwines/><NavBar items={menu}/></>);
  };
  
  export default Componente;
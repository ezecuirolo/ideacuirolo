import React from 'react';
import LogoQwines from './LogoQwines';
import CartWidget from './CartWidget';

const NavBar = props => {
    const items = props.items.map(item => (
      <li key={item.id} className="nav-item">
        <a className="nav-link" href={item.url}>
          {item.label}
        </a>
      </li>
    ));
      return (
      <>
      <nav className="navbar">
        <ul>{items}</ul>
      </nav>
      <CartWidget/>
      </>
    );
  
  };
  let menu = [
    { id:"1",label: "Vinos", url: "/vinos" },
    { id:"2",label: "Olivas", url: "/olivas" },
    { id:"3",label: "Espumantes", url: "/espumantes" },
    { id:"4",label: "Aperitivos", url: "/aperitivos" },
    { id:"5",label: "Delicatessen", url: "/delicatessen" }
  ];
  const Componente = () => {
    return (<><LogoQwines/><NavBar items={menu}/></>);
  };
  
  export default Componente;
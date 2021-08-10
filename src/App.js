import React from 'react';
import './styles.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

const GetNavBar = props => {
    return(<><header><NavBar/></header><ItemListContainer mensaje='Bienvenido a mi tienda'/><ItemCount stock="10" initial="1"/></>);
}
export default GetNavBar;
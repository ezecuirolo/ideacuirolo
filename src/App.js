import React from 'react';
import './styles.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const GetNavBar = props => {
    return(<><header><NavBar/></header><ItemListContainer mensaje='Bienvenido a mi tienda'/></>);
}
export default GetNavBar;
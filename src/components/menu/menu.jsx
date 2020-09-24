import React from "react";
import { Link } from "react-router-dom";
import './menu.css';
const Menu = () => (
    <div className="menu-content">
        <Link to="/products">
            <h5>Productos</h5>
        </Link>
        <ul>
            <Link to="/products?type=laptop">
                <li>Portátiles</li>
            </Link>
            <Link to="/products?type=desk">
                <li>Ordenadores de Sobremesa</li>
            </Link>
            <Link to="/products?type=mobile">
                <li>Móviles</li>
            </Link>
        </ul>
        <hr />
        <Link to="/offers">
            <h5>Ofertas</h5>
        </Link>
        <ul>
            <Link to="/offers?type=week">
                <li>Chollos de la semana</li>
            </Link>
            <Link to="/offers?type=limitedStock">
                <li>Ofertas con limite de stock</li>
            </Link>
            <Link to="/offers?type=limitedHours">
                <li>Ofertas con horas limitadas</li>
            </Link>
        </ul>
        <hr />
        <Link to="/userInfo">
            <h5>Mi cuenta</h5>
        </Link>
        <ul>
            <Link to="/userInfo">
                <li>Datos de mi cuenta</li>
            </Link>
            <Link to="/favorites">
                <li>Mis favoritos</li>
            </Link>
        </ul>
    </div>
);

export default Menu
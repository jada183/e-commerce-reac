import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import caddyImg from '../../assets/icons/carro-inteligente.png';
import removeIcon from '../../assets/icons/basura.svg';
import './favorites.css';
const initialOfferList = [
    {
        name: "Acer Aspire 3 A315-56-52KD Intel Core i5-1035G1/12GB/512GB SSD/15.6",
        image: "https://images-na.ssl-images-amazon.com/images/I/81o8Tll-5-L._AC_SX679_.jpg",
        price: 798,
        quantity: 1,
        id: 1
    },
    {
        name: "PcCom Bronze Intel Core i3-9100F/8GB/240GB SSD+1TB/GTX1650",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OHavu8e9L._AC_SL1500_.jpg",
        price: 525,
        quantity: 2,
        id: 3
    },
];
const Favorites = () => {
    const [favoriteList, setFavoriteList] = useState(initialOfferList)
    return(
        <div className="container favorites">
            <div className="row">
                <h3>Tus favoritos</h3>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="table-container">
                        <div className="row table-header bg-light no-show-mobile">
                            <span className="col-3 col-lg-5">ARTÍCULO</span>
                            <span className="col-3 col-lg-2">PRECIO</span>
                            <span className="col-3 col-lg-2">AÑADIR <span className="no-show-mobile"> AL CARRITO</span></span>
                            <span className="col-3 col-lg-2 last-column">ELIMINAR</span>
                        </div>
                        {favoriteList.map(({ id, name, image, price, quantity}) => (
                            <div className="row mb-3 content-row" >
                                <div className="col-12 col-lg-5 item-title-img-link product-name">
                                    <Link
                                        to={"/product-detail?id=" + id}
                                        className="item-title-img-container"
                                    >
                                        <img
                                        src={image}
                                        className="col-lg-4 col-4 caddy-item-image"
                                        height="100%"
                                        alt="Imagen del producto"
                                        />
                                        <div className="col-lg-7 col-8">
                                            <p className="">{ name }</p>
                                        </div>
                                    </Link>
                                </div>
                                <span className="col-3 offset-1 offset-lg-0 col-lg-2">{ price }€</span>
                                <span className="col-3 col-lg-2">
                                    <button className="btn btn-primary">
                                        <img
                                            src={caddyImg}
                                            width="25px"
                                            height="25px"
                                            alt="carrito de la compra"
                                            className="caddy-button"
                                        />
                                        <span className="pl-3 no-show-mobile">Añadir</span>
                                    </button>
                                </span>
                                <span className="col-3 last-column col-lg-2 remove-item">X</span>
                            </div>
                    ))}
                </div>
                <div className="row mb-5">
                    <div className="col-lg-4 col-10">
                        <button className="btn btn-light">
                            <img
                                src={removeIcon}
                                width="25px"
                                height="25px"
                                alt="Contenedor de basura"
                            />
                            <span className="pl-3 font-size-fix">Limpiar favoritos</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
  </div >
)}
export default Favorites
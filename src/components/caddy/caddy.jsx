import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Quantity from '../quantity/quantity';
import removeIcon from '../../assets/icons/basura.svg';
import  './caddy.css';
const initialProductList = [
    {
        name:"Acer Aspire 3 A315-56-52KD Intel Core i5-1035G1/12GB/512GB SSD/15.6",
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
    {
        name: "PcCom Bronze Intel Core i3-9100F/8GB/240GB SSD+1TB/GTX1650",
        image: "https://images-na.ssl-images-amazon.com/images/I/71%2BxzXp0JLL._AC_SL1500_.jpg",
        price: 525,
        quantity: 2,
        id: 2
    }
];
const Caddy = () => {
    const [productList, setProductList] = useState(initialProductList);
    const [total, setTotal] = useState(0)
    useEffect(() => {
        let total = 0;
        productList.forEach(p => {
            total += (p.price * p.quantity);
        });
        setTotal(total);
    },[]);
    return (
        <div className="container">
            <div className="row">
                <h3>Artículos de tu cesta</h3>
            </div>
            <div className="row">
                <div className="col-lg-9 col-12">
                    <div className="table-container">
                        <div className="row table-header bg-light no-show-mobile">
                            <span className="col-lg-5 col-3">ARTÍCULO</span>
                            <span className="col-lg-2 col-3">PRECIO</span>
                            <span className="col-lg-2 col-3">UNIDADES</span>
                            <span className="col-lg-2 col-3 last-column">TOTAL</span>
                        </div>
                        {productList.map(({ id, name, image, price, quantity}, i) =>(
                            <div className="row mb-3 content-row" key={id}>
                                <div className="col-lg-5 col-12 item-title-img-link">
                                    <Link
                                        to={"/product-detail?id=" + id}
                                        className="item-title-img-container"
                                    >
                                        <img
                                        src={image}
                                        className="col-4 caddy-item-image"
                                        height="100%"
                                        alt="Imagen del producto"
                                        />
                                        <div className="col-lg-7 col-8">
                                            <span className="product-name">{ name }</span>
                                        </div>
                                    </Link>
                                </div>
                                <span className="col-lg-2 col-4 no-show-mobile">{ price }€</span>
                                <span className="col-lg-2 col-4 offset-4 offset-lg-0">
                                    <Quantity quantity={quantity} onQuantityChange={e => { 
                                        const updateproductList = [... productList];
                                        updateproductList[i].quantity = e;
                                        setProductList(updateproductList);
                                        let total = 0;
                                        productList.forEach(p => {
                                            total += (p.price* p.quantity);
                                        });
                                        setTotal(total);
                                    }} />
                                </span>
                                <span className="col-lg-2 col-2 last-column">{ price * quantity }€</span>
                                <span className="remove-item-cross col-1">X</span>
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
                            <span className="pl-3 font-size-fix">Limpiar carrito</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-12">
                <div className="row">
                    <h5 className="col-lg-4 offset-lg-1 offset-1 col-4">TOTAL:</h5>
                    <h5 className="col-lg-4 offset-3 col-4 alig-right">{ total }€</h5>
                </div>
                <div className="row mt-3 mb-5">
                    <div className="col-12">
                        <button className="btn btn-primary col-11 offset-1">Realizar pedido</button>
                    </div>
                </div>
            </div>
        </div>
  </div >
    )
};

export default Caddy;
import React, { useState, useEffect } from 'react';
import redHeart from '../../assets/icons/corazon-rojo.svg'
import grayHeart from  '../../assets/icons/corazon-gris.svg';
import caddyImg from '../../assets/icons/carro-inteligente.png';
import axios from "axios";
import Quantity from '../quantity/quantity';

const ProductDetail = () => {
    const [product, setProduct] = useState('');
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:3001/products",
            params: { id: new URLSearchParams(window.location.search).get('id')},
            headers: {}
        })
            .then(response => response.data)
            .then(response => {
                setProduct(response[0]);
            });
    }, []);
    const createMarkup = (feature) =>  {
        return {
            __html: feature
        }
    };
    const [favorite, setFavorite] = useState(false);
    return (
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-12">
                <img
                src={product.image}
                width="100%"
                height="260px"
                alt="imagen producto"
                className="position-relative responsive-product-detail"
              />
            </div>
            <div className="col-lg-6 col-12">
                <div className="row">
                    <h5 className="col-12">{product.name }</h5>
                </div>
                <div className="row mt-3">
                    <h1 className="price col-lg-4 col-6">{ product.price } €</h1>
                    {(() => {
                        if (product.discount) {
                            return <div className="col-lg-2 col-4">
                                        <div className="text-aling-center">
                                            <span>Dto</span>
                                        </div>
                                        <div className="discount text-aling-center">{product.discount} %</div>
                                    </div>
                        }
                    })()}
                </div>
                <div className="row mt-5">
                    <b className="col-lg-2 col-6">Marca:</b>
                    <span className="offset-lg-2 offset-0 col-6">{ product.brand }</span>
                </div>
                <div className="row mt-3">
                    <b className="col-lg-2 col-6">Envio:</b>
                    <span className="offset-lg-2 col-6">Desde: { product.shippingConst } €</span>
                </div>
                <div className="row mt-3">
                    <b className="col-lg-2 col-6">Cantidad:</b>
                    <div className="offset-lg-2 col-6 offset-0 col-lg-4">
                            <Quantity  quantity={quantity} onQuantityChange={e => setQuantity(e)} />
                    </div>
                        
                </div>
                <div className="row mt-3">
                    <b className="col-lg-2 col-6">Disponibilidad</b>
                    {(() => { 
                        if (product.stock) {
                            return <span className="offset-lg-2 offset-0 col-6 stockOk" >En stock</span>
                        } else {
                            return <span className="offset-lg-2 offset-0 col-6 stockNoOk" >No disponible</span>
                        }
                    })()}
                   
                    
                </div>
                <div className="row mt-5">
                    <div className="col-lg-2 col-4">
                        <button className="favoriteButton"
                                onClick={e => setFavorite(!favorite)}>
                        {(() => {
                            if (favorite) {
                                return <img
                                    src={ redHeart }
                                    width="45px"
                                    height="45px"
                                    alt="Corazón rojo"
                                />
                            } else {
                                return <img
                                    src={ grayHeart}
                                    width="45px"
                                    height="45px"
                                    alt="Corazón gris"
                                />
                            }
                        })()}
                        </button>
                </div>
                <button className="btn btn-primary col-lg-6 offset-lg-1 col-8">
                    <img
                        src={caddyImg}
                        width="25px"
                        height="25px"
                        alt="carrito de la compra"
                        className="caddy-button"
                    />
                    <span className="pl-3 font-size-fix">Añadir a carrito</span>
                </button>
            </div>
        </div>
    </div>
    <div className="row feature-box-margin">
        <hr className="col-12" />
    </div>
    <div className="row">
        <div>
            <h5 className="col-3">Características</h5>
        </div>
    </div>
    <div className="row">
        <div dangerouslySetInnerHTML={createMarkup(product.features)} className="col-12 features"></div>
    </div>
  </div >
  )}

export default ProductDetail
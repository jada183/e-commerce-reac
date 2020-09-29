import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import PropTypes from 'prop-types';
import laptopImg from "../../assets/images/laptop.png"
import mobileImg from "../../assets/images/mobiles.png";
import computerDesk from "../../assets/images/sobremesa.png"
import OfferContainer from "../offer-container/offerContainer";
import axios from "axios";
const initialOfferList = [];
const Home = () => {
    const [offerList, setOfferList] = useState(initialOfferList)
    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:3001/products",
            params: {},
            headers: {}
        })
            .then(response => response.data)
            .then(response => response.filter(r => r.discount > 0))
            .then(response => response.sort((a, b) => (a.discount < b.discount) ? 1 : ((b.discount < a.discount) ? -1 : 0)).slice(0, 4))
            .then(response => {
                setOfferList(response);
            });
    }, [])
    return (
        <div className="container">
            <div className="row mb-2">
                <h3>Productos</h3>
            </div>
            <div className="row mb-4">
                <div className="col-lg-4 col-12 border-box">
                    <Link to="/products?type=laptop">
                        <div className="row">
                            <h3 className="offset-xl-4 col-xl-4 col-12 text-align-center">Portátiles</h3>
                        </div>
                        <div className="row">
                            <img
                                src={laptopImg}
                                width="auto"
                                height="220px"
                                alt="Portatiles"
                                className="col-12 reponsive-category"
                            />
                        </div>
                    </Link>
                </div>

                <div className="col-lg-4 col-12 border-box">
                    <Link to="/products?type=mobile">
                        <div className="row">
                            <h3 className="offset-xl-4 col-xl-4 col-12 text-align-center">Móviles</h3>
                        </div>
                        <div className="row">
                            <img
                                src={mobileImg}
                                width="auto"
                                height="220px"
                                alt="Móviles"
                                className="col-12 reponsive-category"
                            />
                        </div>
                    </Link>
                </div>

                <div className="col-lg-4 col-12 border-box">
                    <Link to="/products?type=desk">
                        <div className="row">
                            <h3 className="offset-xl-4 col-xl-4 col-12 text-align-center">Sobremesas</h3>
                        </div>
                        <div className="row">
                            <img
                                src={computerDesk}
                                width="auto"
                                height="220px"
                                alt="Móviles"
                                className="col-12 reponsive-category"
                            />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="row mb-2">
                <h3>Ofertas destacadas</h3>
            </div>
            <div className="row mb-2">
                {offerList.map(({
                    id, name, image, price, discount, stockLimit, weekOffer, timeLimitDate
                }) => (
                        <div className="col-lg-3 col-12" key={id}>
                            <Link to={"/product-detail?id=" + id}>
                                <OfferContainer
                                    id={id}
                                    name={name}
                                    image={image}
                                    price={price}
                                    discount={discount}
                                    stockLimit={stockLimit}
                                    weekOffer={weekOffer}
                                    timeLimitDate={timeLimitDate}
                                />
                            </Link>
                        </div>
                    ))}
            </div>
        </div >
    )
};
export default Home;
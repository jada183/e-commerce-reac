import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import PropTypes from 'prop-types';
import laptopImg from "../../assets/images/laptop.png"
import mobileImg from "../../assets/images/mobiles.png";
import computerDesk from "../../assets/images/sobremesa.png"
import OfferContainer from "../offer-container/offerContainer";
const initialOfferList = [];
const Home = () =>{
    const [offerList, setOfferList] = useState(initialOfferList)
    useEffect(() => {
        fetch("http://localhost:3001/products")
            .then(res => res.json())
            .then(response => response.filter(r => r.discount > 0))
            .then(response => response.sort((a, b) => (a.discount < b.discount) ? 1 : ((b.discount < a.discount) ? -1 : 0)).slice(0, 4))
            .then(
                (result) => {
                   setOfferList(result);
                },
                (error) => {
                    console.log(error);
                }
            )
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
)};

// Home.propsTypes = {
//     offerList: PropTypes.arrayOf(PropTypes.shape(OfferContainer.propTypes))
// }
// Home.defaultProps = {
//     offerList: [{
//         id: 2,
//         name: "Lenovo V14 ADA AMD Ryzen 3 3250U/8GB/256GB SSD/14",
//         image: "https://images-na.ssl-images-amazon.com/images/I/71%2BxzXp0JLL._AC_SL1500_.jpg",
//         price: 498,
//         discount: 20,
//         brand: "Lenovo",
//         shippingConst: 5.25,
//         stock: true,
//         features: "<p><ul><li>Productividad y seguridad mejoradas</li> <li>Fiabilidad extrema</li> <li>Asistencia organizativa</li></ul></p>",
//         category: "laptop",
//         stockLimit: null,
//         stockLimitBool: false,
//         timeLimitDate: null,
//         timeLimitDateBool: false,
//         weekOffer: false
//     }, {
//         id: 3,
//         name: "Lenovo V14 ADA AMD Ryzen 3 3250U/8GB/256GB SSD/14",
//         image: "https://images-na.ssl-images-amazon.com/images/I/81o8Tll-5-L._AC_SX679_.jpg",
//         price: 580,
//         discount: 35,
//         brand: "Lenovo",
//         shippingConst: 5.25,
//         stock: true,
//         features: "<p><ul><li>Productividad y seguridad mejoradas</li> <li>Fiabilidad extrema</li> <li>Asistencia organizativa</li></ul></p>",
//         category: "laptop",
//         stockLimit: null,
//         stockLimitBool: false,
//         timeLimitDate: null,
//         timeLimitDateBool: false,
//         weekOffer: false
//     },
//     {
//         id: 4,
//         name: "Lenovo V14 ADA AMD Ryzen 3 3250U/8GB/256GB SSD/14",
//         image: "https://images-na.ssl-images-amazon.com/images/I/71%2BxzXp0JLL._AC_SL1500_.jpg",
//         price: 620,
//         discount: 20,
//         brand: "Lenovo",
//         shippingConst: 5.25,
//         stock: true,
//         features: "<p><ul><li>Productividad y seguridad mejoradas</li> <li>Fiabilidad extrema</li> <li>Asistencia organizativa</li></ul></p>",
//         category: "laptop",
//         stockLimit: 30,
//         stockLimitBool: false,
//         timeLimitDate: null,
//         timeLimitDateBool: false,
//         weekOffer: false
//     }, {
//         id: 5,
//         name: "Lenovo V14 ADA AMD Ryzen 3 3250U/8GB/256GB SSD/14",
//         image: "https://images-na.ssl-images-amazon.com/images/I/81o8Tll-5-L._AC_SX679_.jpg",
//         price: 498,
//         discount: 30,
//         brand: "Lenovo",
//         shippingConst: 5.25,
//         stock: true,
//         features: "<p><ul><li>Productividad y seguridad mejoradas</li> <li>Fiabilidad extrema</li> <li>Asistencia organizativa</li></ul></p>",
//         category: "laptop",
//         stockLimit: null,
//         stockLimitBool: false,
//         timeLimitDate: '2020/10/15',
//         timeLimitDateBool: null,
//         weekOffer: false
//     }

//     ]
// }
export default Home;
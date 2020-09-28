import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import OfferContainer from "../offer-container/offerContainer";
const initialOfferList = [];
const Offers = ({ match }) => {
    const [offerList, setOfferList] = useState(initialOfferList)
    const [searchQuery, setSearchQuery] = useState('');
    const [searchValue, setNewSearchValue] = useState('');
    const optionsList = ["nombre", "categoria", "marca"];
    const [filterCategory, setFilterCategory] = useState('nombre');
    useEffect(() => {
        setSearchQuery(new URLSearchParams(window.location.search).get('type'));
    }, [match]);
    useEffect(() => {
        getProduct(searchValue, filterCategory, searchQuery);
    }, [searchQuery]);

    const getProduct = (searchValue, filterCategory, offerFilter) => {
        let parameters = {};
        if (offerFilter) {
            switch (offerFilter) {
                case "week": {
                    parameters.weekOffer = true;
                    break;
                }
                case "limitedStock": {
                    parameters.stockLimitBool = true;
                    break;
                }
                case "limitedHours": {
                    parameters.timeLimitDateBool = true;
                }
            }
        }
        if (searchValue) {
            switch (filterCategory) {
                case "nombre": {
                    parameters.name = searchValue;
                    break;
                }
                case "categoria": {
                    switch (searchValue) {
                        case "portatiles": {
                            parameters.category  = "laptop";
                            break;
                        }
                        case "sobremesa": {
                            parameters.category = "desk";
                            break;
                        }
                        case "moviles": {
                            parameters.category = "mobile" ;
                            break;
                        }
                        default: {
                            break;
                        }
                    }

                    break;
                }
                case "marca": {
                    parameters.brand = searchValue ;
                    break;
                }
                default: {
                    break;
                }
            }
        }
        return axios({
            method: "GET",
            url: "http://localhost:3001/products",
            params: parameters,
            headers: {}
        })
            .then(response => response.data)
            .then(response => response.filter(r => r.discount > 0))
            .then(response => {
                setOfferList(response);
            });
    }
    const searchProducts = (searchValue, filterCategory) => {
        let parameters = {};
        if (searchValue) {
            switch (filterCategory) {
                case "nombre": {
                    parameters = { name: searchValue };
                    break;
                }
                case "categoria": {
                    switch (searchValue) {
                        case "portatiles": {
                            parameters = { category: "laptop" };
                            break;
                        }
                        case "sobremesa": {
                            parameters = { category: "desk" };
                            break;
                        }
                        case "moviles": {
                            parameters = { category: "mobile" };
                            break;
                        }
                        default: {
                            parameters = {};
                        }
                    }

                    break;
                }
                case "marca": {
                    parameters = { brand: searchValue };
                    break;
                }
                default: {
                    break;
                }
            }
        }
        return axios({
            method: "GET",
            url: "http://localhost:3001/products",
            params: parameters,
            headers: {}
        })
            .then(response => response.data)
            .then(response => {
                setOfferList(response);
            });
    }
    return (
        <div className="container">
            <div className="row justify-content-center mb-5">
                <h3 className="col-md-4 page-info-title">Ofertas</h3>
            </div>
            <div className="row mb-5">
                <select name="optionsFilter" className="col-lg-2 mb-2 offset-lg-1 col-12 offset-0"
                    value={filterCategory}
                    onChange={e => setFilterCategory(e.target.value)}>
                    {
                        optionsList.map(v => (
                            <option key={v} value={v}>{v}</option>
                        ))
                    }
                </select>
                <input type="text"
                    className="form-control col-lg-6 col-12 mb-2"
                    value={searchValue}
                    onChange={e => setNewSearchValue(e.target.value)}
                />
                <button className="btn btn-light col-lg-2 col-12 mb-2"
                    onClick={() => searchProducts(searchValue, filterCategory)}
                >Buscar</button>
            </div >
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
            </div >
        </div >
    )
}
export default Offers
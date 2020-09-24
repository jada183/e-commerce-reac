import React from "react";
import PropTypes from 'prop-types';
import './offerContainer.css';

const OfferContainer = ({
    name, image, price, discount, stockLimit, weekOffer, timeLimitDate
}) => (
        <div className="border-box offerContainer">
            <div>
                {(() => {
                    if (discount) {
                        return <div className="discount-container">{discount} %</div>
                    }
                })()}
                <img
                    src={image}
                    width="100%"
                    height="160px"
                    alt="imagen producto"
                    className="position-relative responsive-offer"
                />
            </div>
            <div className="row mt-10">
                <span className="col-12">{name}</span>
            </div>
            <div className="row">
                <span className="col-xl-5 col-5">Precio:</span>
                {(
                    () => {
                        if (discount) {
                            return <span className="col-xl-2 col-2 price-value">{ price }€</span>
                        } else {
                            return <span className="col-xl-2 col-2">{price}€</span>
                        }
                    }
                )()}
                {/* <span className="col-xl-2 col-2" :className="discount ?  'price-value' : ''">{{ price }}€</span> */}
            </div>
            {(
                () => {
                    if (stockLimit) {
                        return <div className="row">
                                    <span className="col-12 alert-text">Quedan {stockLimit} unidades</span>
                                </div>
                    }
                }
            )()}
            {(
                () => {
                    if (weekOffer) {
                        return <div className="row">
                                    <span className="col-12 alert-text">Oferta solo esta semana</span>
                                </div>
                    }
                }
            )()}
            {(
                () => {
                    if (timeLimitDate) {
                        return <div className="row" v-else-if="timeLimitDate">
                                    <span className="col-12 alert-text">Fecha limite: {timeLimitDate}</span>
                                </div>
                    }
                }
            )()}
        </div >
    );

OfferContainer.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    discount: PropTypes.number,
    stockLimit: PropTypes.number,
    weekOffer: PropTypes.bool,
    timeLimitDate: PropTypes.string,
    id: PropTypes.number
};
export default OfferContainer;
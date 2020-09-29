import React from "react";
import PropTypes from 'prop-types';
const Quantity = ({ quantity, onQuantityChange}) => {
    const rest = () => {
        if (quantity > 1) {
            quantity--;
            onQuantityChange(quantity);
        }
    }
    const sum = () => { 
        quantity++;
        onQuantityChange(quantity);
    }
    const changeQuantityValue = (value) =>  {
        const re = /^[0-9\b]+$/;
        if (value === '' || re.test(value)) {
            onQuantityChange(value);
        }
    }
    return (
        <div className="row">
        <button className="btn btn-light col-3"  onClick={e => rest()}>-</button>
        <input
            type="text"
            className="form-control col-4"
            value={quantity}
                onChange={e => changeQuantityValue(e.target.value)}
            // v-focus
            // v-on: blur="adjustValue()"
            // @change="adjustValue()"
        />
        <button className="btn btn-light col-3" onClick={e => sum()}>+</button>
  </div >
    )
};
Quantity.propTypes = {
    quantity: PropTypes.number,
    onQuantityChange: () => { },
};
export default Quantity
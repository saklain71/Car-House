import React from 'react';
import './Cars.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cars = ({car, handlerAddToCart}) => {
    const {id, name,price} = car;

    return (
        <div className='cars-container'>
            <img src={car.img} alt="" />
            <p>Car Name~<b>{name}</b></p>
            <p>Car Id: {id}</p>
            <p>Car price: ${price}</p>
            <div className='car-btn-div' >
            <button className='car-btn' onClick={()=>handlerAddToCart(car)} > Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
            
           
            </div>
        </div>
        
    );
};

export default Cars;
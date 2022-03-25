import React from 'react';
import './Cars.css'
const Cars = ({car, handlerAddToCart}) => {
    const {id, name,price} = car;

    return (
        <div className='cars-container'>
            <img src={car.img} alt="" />
            <p>Car Name~<b>{name}</b></p>
            <p>Car Id: {id}</p>
            <p>Car price: ${price}</p>
            <div className='car-btn-div' >
            <button className='car-btn' onClick={()=>handlerAddToCart(car)}>Add to Cart</button>
            </div>
        </div>
        
    );
};

export default Cars;
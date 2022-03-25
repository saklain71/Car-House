import React from 'react';
import './Cars.css'
const Cars = (props) => {
    const {car} = props;

    return (
        <div className='cars-container'>
            <img src={car.img} alt="" />
        </div>
    );
};

export default Cars;
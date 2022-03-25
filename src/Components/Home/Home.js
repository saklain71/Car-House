import React, { useEffect, useState } from 'react';
import Cars from '../Cars/Cars';
import './Home.css'

const Home = () => {
    const [cars, setCar] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setCar(data))
    },[]);
    return (
        <div>
            <h1>Car House </h1>
           <div className='car-container'>
           {
                cars.map(car=> <Cars
                car={car}
                ></Cars>)
            }
           </div>
        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import Cars from '../Cars/Cars';
import SelectedCars from '../SelectedCars/SelectedCars';
import './Home.css'

const Home = () => {
    const [cars, setCar] = useState([]);
    const [selectCar, setSelectCar] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setCar(data))
    },[]);
    const handlerAddToCart = (car) =>{
        setSelectCar(car)
    }
    return (
        <div className='cars-home'>
           <div className='car-container'>
           {
                cars.map(car=> <Cars
                car={car}
                key={car.id}
                handlerAddToCart={handlerAddToCart}
                ></Cars>)
            }
           </div>
           <div className='cars-selector'>
               <SelectedCars
               info={selectCar} 
               ></SelectedCars>
           </div>
           
        </div>
    );
};

export default Home;
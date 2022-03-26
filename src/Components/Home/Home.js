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
        const newNew = [...selectCar, car]
        setSelectCar(newNew)
    }
    const randomNumber =()=>{
     let randomNum =  Math.round(Math.random() * 10);
     if(randomNum === 0){
        randomNum =  Math.round(Math.random() * 10);
     }
     console.log(randomNum);
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
           <h3>Selected Cars</h3>
               {/* <SelectedCars
               info={selectCar} 
               ></SelectedCars> */}
               {
                   selectCar.map(newCar=> <SelectedCars
                   info={newCar}
                   ></SelectedCars>)
               }
              <div >
              <button className='selected-btn' onClick={randomNumber}>Choose 1 for you</button>
               <button className='selected-btn'>Choose again</button>
              </div>
            
           </div>
           
        </div>
    );
};

export default Home;
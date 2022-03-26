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
    
  const RandomItemFromArray = car =>{
  
  const random = car[Math.floor(Math.random()*car.length)];

  const randomArray = [random];
  setSelectCar(randomArray)
}
const chooseAgain =(car)=>{
  
    car = [];
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
           
           <div className='selected-cars'>
          
           <div className='cars-selector'>
           <h3>Selected Cars</h3>

           {
                   selectCar.map(newCar=> <SelectedCars
                   info={newCar}
                   key={newCar.id}
                   ></SelectedCars>)
               }
              <div>
              <button className='selected-btn' onClick={()=>RandomItemFromArray(selectCar)}>Choose 1 for you</button>
               <button className='selected-btn' onClick={()=>chooseAgain(selectCar)}>Choose again</button>
               {
                   
               }

              </div>
           </div>
              
           
            
           </div>
           
        </div>
    );
};

export default Home;
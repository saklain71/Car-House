import React from 'react';
import './SelectedCars.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const SelectedCars = (props) => {
    const {info}= props;

console.log(info);
    return (
        <div className='selected-head'>
            
            <div className='select-conainer'>
                <img src={info.img} alt="" />
                <p> {info.name}</p>
                <button style={{backgroundColor:'white',border:'white'}}> <FontAwesomeIcon icon={faTrash} /></button>
            </div>

        </div>
    );
};

export default SelectedCars;
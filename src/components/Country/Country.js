import React from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props)
    const {name, area, population, flags} = props.country;
    return (
        {/*
        //single single kore receive 
        <div className='country'>
            <h1>Country Name: {props.name}</h1>
            <h3>Population: {props.population}</h3>
            <h3>Area: {props.area}</h3>
        </div> */},
        <div className='country'>
            <h1>Country Name: {name.common}</h1>
            <img src={flags.png} alt="" />
            <h3>Population: {population}</h3>
            <h3>Area: {area}</h3>
        </div>
    );
};

export default Country;
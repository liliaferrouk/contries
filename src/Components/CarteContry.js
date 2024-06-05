import React from 'react'
import './CarteContry.css'

function CarteContry({name,population,region,capital,flag}) {
  return (
    <div className='carte-contry'>
        <img src={flag} alt="img" />
        <div className="info">
            <h1>{name}</h1>
            <p><span>Population:</span> {population}</p>
            <p><span>Region:</span> {region}</p>
            <p><span>Capital:</span> {capital}</p>
        </div>
    </div>
  )
}

export default CarteContry
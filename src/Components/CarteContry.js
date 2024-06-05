import React from 'react'
import './CarteContry.css'

function CarteContry() {
  return (
    <div className='carte-contry'>
        <img src="https://flagcdn.com/de.svg" alt="img" />
        <div className="info">
            <h1>Germany</h1>
            <p><span>Population:</span> 81,770,900</p>
            <p><span>Region:</span> Europe</p>
            <p><span>Capital:</span> Berlin</p>
        </div>
    </div>
  )
}

export default CarteContry
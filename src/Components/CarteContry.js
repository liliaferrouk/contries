import React from 'react'
import './CarteContry.css'

function CarteContry({name,population,region,capital,flag,darkMode,setSelectedContrie}) {
    // Function to format number with commas
  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };

  function hundleClick(){
    setSelectedContrie(name)
  }
  return (
    <div className={`carte-contry ${darkMode?'dark':''}`} onClick={hundleClick}>
        <img src={flag} alt="img" />
        <div className="info">
            <h1>{name}</h1>
            <p><span>Population:</span> {formatNumber(population)}</p>
            <p><span>Region:</span> {region}</p>
            <p><span>Capital:</span> {capital}</p>
        </div>
    </div>
  )
}

export default CarteContry
import React from 'react'
import arrow_b from '../images/arrow-back-white.svg'
import arrow_n from '../images/arrow-back-black.svg'
import './OneContrie.css'

function OneContrie({ contry,darkMode,setSelectedContrie }) {
  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };
  const { name, population, region, capital, nativeName, subRegion, topLevelDomain, currencies, languages, borders, alphaCode, flag } = contry;
  return (
    <div className='one-Contry-div'>
      <div className="btn-back" onClick={()=>{setSelectedContrie(null)}}>
        <img src={darkMode?arrow_b:arrow_n} alt="back icon" />
        <p>Back</p>
      </div>
      <div className="info-contry">
          <img src={flag} alt="flag" />
          <div className="info-wraper">
            <div className="info1">
              <h1>{name}</h1>
              <p><span>Native Name: </span>{nativeName}</p>
              <p><span>Population: </span>{formatNumber(population)}</p>
              <p><span>Region: </span>{region}</p>
              <p><span>Sub Region: </span>{subRegion}</p>
              <p><span>Capital: </span>{capital}</p>
            </div>
            <div className="info2">
              <p><span>Top Level Domain: </span>{topLevelDomain}</p>
              {/* to do:  */}
              <p><span>Currencies: </span>Euro</p>
              <p><span>Languages: </span>Dutch,French,German</p>
            </div>
          </div>
          <div className="border-div">
            <h2>Border Countries: </h2>
            <div className='border-contries-list'>
              <div>France</div>
              <div>Germany</div>
              <div>Netherlands</div>
              <div>Netherlands</div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default OneContrie
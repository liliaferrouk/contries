import React from 'react'
import arrow_b from '../images/arrow-back-white.svg'
import arrow_n from '../images/arrow-back-black.svg'
import './OneContrie.css'

function OneContrie({ contry,darkMode,setSelectedContrie,usedData}) {

  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };

  const { name, population, region, capital, nativeName, subRegion, topLevelDomain, currencies, languages, borders,flag } = contry;

  function getCurrency(){
    let str = ""
    for (let i = 0; i < currencies.length; i++) {
      if(i>0) str += ", "
      str += currencies[i].name;
    }
    return str;
  }

  function getLanguages(){
    let str = ""
    for (let i = 0; i < languages.length; i++) {
      if(i>0) str += ", "
      str += languages[i].name;
    }
    return str;
  }

  function getBorderContries() {
    let result = []
    for (let i = 0; i < borders.length; i++) {
      let ContryBorder = usedData.find(d => d.alphaCode === borders[i])
      result.push(ContryBorder.name);
    }
    return result
  }

  return (
    <div className={`one-Contry-div ${darkMode?'dark':''}`}>
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
              <p><span>Currencies: </span>{getCurrency()}</p>
              <p><span>Languages: </span>{getLanguages()}</p>
            </div>
          </div>
          <div className="border-div">
            <h2>Border Countries: </h2>
            <div className='border-contries-list'>
              {getBorderContries().map(country => (
                <div>{country}</div>
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export default OneContrie
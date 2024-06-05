import React from 'react'

function OneContrie({ contry }) {
  if (!contry) {
    return null; // Return null if contry is undefined
  }
  const { name, population, region, capital, nativeName, subRegion, topLevelDomain, currencies, languages, borders, alphaCode, flag } = contry;
  return (
    <div>
      <p>{name}</p>
      <p>{population}</p>
    </div>
  )
}

export default OneContrie
import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import AllContries from './Components/AllContries';
import OneContrie from './Components/OneContrie';
import data from './data.json'


function App() {
  const [darkMode,setDarkMode]=useState(false)
  const [selectedContrie,setSelectedContrie] = useState(null)
  const usedData = data.slice(0,8).map(contry=>({
    name: contry.name,
    population: contry.population,
    region: contry.region,
    capital: contry.capital,
    nativeName: contry.nativeName,
    subRegion: contry.subregion,
    topLevelDomain: contry.topLevelDomain,
    currencies: contry.currencies,
    languages: contry.languages,
    borders: contry.borders,
    alphaCode: contry.alpha3Code,
    flag: contry.flags.svg
  }))
  return (
    <div className="App">
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <main className={`${darkMode?'dark':''}`}>
        {
          selectedContrie
          ?
          <OneContrie/>
          :
          <AllContries darkMode={darkMode} usedData={usedData} />
        }
      </main>
    </div>
  );
}

export default App;

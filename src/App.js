import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import AllContries from './Components/AllContries';
import OneContrie from './Components/OneContrie';
import data from './data.json'


function App() {
  const prefersDarkMode = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const [darkMode,setDarkMode]=useState(prefersDarkMode)
  const [selectedContrie,setSelectedContrie] = useState(null)
  const usedData = data.map(contry=>({
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

  function getContryByName(name) {
    return usedData.find(d => d.name === name);
  }
  return (
    <div className="App">
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <main className={`${darkMode?'dark':''}`}>
        {
          selectedContrie
          ?
          <OneContrie contry={getContryByName(selectedContrie)} darkMode={darkMode} setSelectedContrie={setSelectedContrie} usedData={usedData}/>
          :
          <AllContries darkMode={darkMode} usedData={usedData} setSelectedContrie={setSelectedContrie}/>
        }
      </main>
    </div>
  );
}

export default App;

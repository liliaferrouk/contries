import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import AllContries from './Components/AllContries';
import OneContrie from './Components/OneContrie';


function App() {
  const [darkMode,setDarkMode]=useState(false)
  const [selectedContrie,setSelectedContrie] = useState(null)
  return (
    <div className="App">
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <main className={`${darkMode?'dark':''}`}>
        {
          selectedContrie
          ?
          <OneContrie/>
          :
          <AllContries/>
        }
      </main>
    </div>
  );
}

export default App;

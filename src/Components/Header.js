import React from 'react'
import './Header.css'
import moon_v from '../images/moon-v.svg'
import moon_r from '../images/moon-r.svg'

function Header({darkMode,setDarkMode}) {
  return (
    <header className={`${darkMode?'dark':''}`}>
        <p>Where in the world?</p>
        <div className='switch-mode' onClick={()=>setDarkMode(prev=>!prev)}>
            {
                darkMode
                ?
                <img src={moon_r} alt="moon light mode" />
                :
                <img src={moon_v} alt="moon dark mode" />
            }
            <span>Dark Mode</span>
        </div>
    </header>
  )
}

export default Header
import React, { useState } from 'react'
import './FilterRegions.css'
import arrow from '../images/arrow-down.svg'
import arrow_blanc from '../images/arrow-down-blanc.svg'

function FilterRegions({filter,setFilter,darkMode}) {
    const regions = ["Africa","America","Asia","Europe","Oceania","All"]
    const [clicked,setCliqued] = useState(false)

    function hundleClick(regionname){
        if(regionname=='All'){
            setFilter('')
        }else{
            setFilter(regionname)
        }
        setCliqued(false)
    }

  return (
    <div className={`filter-region ${darkMode?'dark':''}`}>
        <div className='selectionne' onClick={()=>setCliqued(prev=>!prev)}>
            {
                filter ==='' ?
                <p>Filter by Region</p> :
                <p>{filter}</p>
            }
            <img src={darkMode? arrow_blanc : arrow} alt="arrow down" />
        </div>
        {
            clicked &&
            <div className="list">
                {regions.map((r) => (
                    ((filter !== r)&&(filter !== '' || r !== 'All') && <p onClick={()=>hundleClick(r)} key={r}>{r}</p>)
                ))}
            </div>
        }
    </div>
  )
}

export default FilterRegions
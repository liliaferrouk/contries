import React, { useState } from 'react'
import './FilterRegions.css'
import arrow from '../images/arrow-down.svg'

function FilterRegions({filter,setFilter}) {
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
    <div className="filter-region">
        <div className='selectionne' onClick={()=>setCliqued(prev=>!prev)}>
            {
                filter ==='' ?
                <p>Filter by Region</p> :
                <p>{filter}</p>
            }
            <img src={arrow} alt="arrow down" />
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
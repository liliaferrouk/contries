import React, { useState, useEffect } from 'react'
import './AllContries.css'
import search_icon from '../images/search.svg'
import FilterRegions from './FilterRegions';
import CarteContry from './CarteContry';


function AllContries({darkMode,usedData,setSelectedContrie}) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('');
    const [filteredCountries, setFilteredCountries] = useState(usedData);

    useEffect(() => {
        const result = usedData.filter(country =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (filter === '' || country.region === filter)
        );
        setFilteredCountries(result);
    }, [searchQuery, filter,usedData]);

  return (
    <div>
        <div className="search-filter">
            <div className={`search-input-wrapper ${darkMode?'dark':''}`}>
                <img src={search_icon} alt="search icon" />
                <input
                    type="text"
                    placeholder="Search for a country..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="search-input"
                />
            </div>
            <FilterRegions filter={filter} setFilter={setFilter} darkMode={darkMode}/>
        </div>

        <div className="countries-list">
            {filteredCountries.map(country => (
                <CarteContry
                    key={country.name}
                    name={country.name}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                    flag={country.flag}
                    darkMode={darkMode}
                    setSelectedContrie={setSelectedContrie}
                />
            ))}
        </div>
    </div>
  )
}

export default AllContries
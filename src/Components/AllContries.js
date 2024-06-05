import React, { useState, useEffect } from 'react'
import './AllContries.css'
import search_icon from '../images/search.svg'
import FilterRegions from './FilterRegions';
import CarteContry from './CarteContry';


function AllContries({darkMode,usedData,setSelectedContrie}) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const countriesPerPage = 10;

    const fetchCountries = async (page) => {
        setLoading(true);
        const startIndex = (page - 1) * countriesPerPage;
        const endIndex = startIndex + countriesPerPage;
        const result = await new Promise((resolve) => {
            setTimeout(() => {
                const dataSlice = usedData
                    .filter(country =>
                        country.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
                        (filter === '' || country.region === filter)
                    )
                    .slice(startIndex, endIndex);
                resolve(dataSlice);
            }, 500); // Simulate delay for demonstration purposes (you can remove this in your actual code)
        });
        setFilteredCountries(prevCountries => [...prevCountries, ...result]);
        setLoading(false);
    };

    useEffect(() => {
        fetchCountries(currentPage);
    }, [currentPage, searchQuery, filter]);

    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        console.log("Scroll detected. ScrollTop:", scrollTop, "ClientHeight:", clientHeight, "ScrollHeight:", scrollHeight);
        if (scrollTop + clientHeight > scrollHeight -50 && !loading) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
            {loading && <p>Loading...</p>}
        </div>
    </div>
  )
}

export default AllContries
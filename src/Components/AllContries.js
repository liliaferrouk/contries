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
    const [hasMore,setHasMore] = useState(true)
    const countriesPerPage = 8;

    const fetchCountries = async (page, reset = false) => {
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
        setFilteredCountries(prevCountries => reset ? result : [...prevCountries, ...result]);
        setHasMore(result.length === countriesPerPage);
        setLoading(false);
    };

    useEffect(() => {
        setFilteredCountries([]);
        setCurrentPage(1);
        fetchCountries(1, true);
    }, [searchQuery, filter]);


    useEffect(() => {
        if (currentPage > 1) {
            fetchCountries(currentPage);
        }
    }, [currentPage]);

    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        // console.log("Scroll detected. ScrollTop:", scrollTop, "ClientHeight:", clientHeight, "ScrollHeight:", scrollHeight);
        if (scrollTop + clientHeight > scrollHeight -200 && !loading && hasMore) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, hasMore]);

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
            {!loading && filteredCountries.length ===0 && <p>No countries found.</p>}
        </div>
    </div>
  )
}

export default AllContries
import React from 'react';
import InnerContent from '../components/homepage/InnerContent';
import SearchBar from '../components/Search/SearchBar.js';
import '../components/homepage/homepage.css';
import '../components/homepage/homepage.css'
// event cards
// footer
const HomePage = () => {
    return (
        <div className='home'>
            <SearchBar />
            <InnerContent />
        </div>
    )
}

export default HomePage;
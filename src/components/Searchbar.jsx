import React from 'react';
import './Searchbar.css';

function Searchbar() {
  return (
    <div>
        <form className='search-bar' action="#">
            <input className='search-bar-input' type="text" name="search" id="search" placeholder='Search for Portraits' />
        </form>
    </div>
  )
}

export default Searchbar;

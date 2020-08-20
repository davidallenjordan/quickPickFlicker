import React from 'react'

// Component for Rendering the Search Bar
// Recieves props from QuickPickFlicker.js

const SearchBar = (props) => {

  const { handleSearchText, handleSearch, handleSubmit } = props

  return (
    <div className="searchBar wrapper">

      <form className="searchForm" action="submit" onSubmit={handleSubmit}>
        <legend>Search for movies</legend>

        <div className="formFlexContainer">
          <label className="srOnly" >Type in a movie to search</label>
          <input type="text" placeholder="Search for movies" onChange={(e) => handleSearchText(e)}  />
          <button className="searchButton"  title="Search" aria-label="Search" onClick={handleSearch}><i class="fas fa-search"></i></button>
        </div>
        
      </form>

    </div>
  )

}

export default SearchBar
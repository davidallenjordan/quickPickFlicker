import React from 'react'

const SearchBar = (props) => {
  const {
    handleSearchText,
    handleSearch,
    handleSubmit
  } = props

  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => handleSearchText(e)}  />
      <button onClick={ handleSearch }>SEARCH</button>
      </form>
    </div>
  )
}

export default SearchBar
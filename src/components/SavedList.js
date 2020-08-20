import React from 'react'

// Render's the user lists by mapping out the listNames and the ListItems
// Gets props from UserList

const SavedList = (props) => {
  const { userList, handleDeleteList, handleDeleteMovie } = props
  return (
    <ul className="movieListContainer">
      {
        userList.map((listName) => {
          return(
            <li className="movieList" key={listName.key}>

              <div className="movieListTitle">
                <p>{listName.info.name}</p>
                <button 
                  className="trashButton" aria-label="Delete List" 
                  onClick={() => { handleDeleteList(listName.key) }}>
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>  

              <div className="selectedMoviesinList">
                <ul>
                  {
                    listName.info.list.map((listItem, index) => {
                      return (
                        <li key={`${listName.key}-${index}`} className="selectedMovies">
                        <p>{listItem}</p>
                        <button 
                          aria-label="Delete Movie" className="trashButtonMovie" 
                          onClick={() => { handleDeleteMovie(listName.key, index) }} >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>

            </li>
          )
        })
      }
    </ul>
  )
  
}

export default SavedList



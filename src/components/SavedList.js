
import React from 'react'



const SavedList = (props) => {
    const { userList, handleDeleteList, handleDeleteMovie } = props
    return (
        <ul className="movieListContainer">
            {
                userList.map((listName) => {
                    console.log(userList);
                    return(
                        <li className="movieList" key={listName.key}>
                            <div className="movieListTitle">
                                <p>{listName.info.name}</p>
                                <button onClick={() => {handleDeleteList(listName.key)}}>Delete List</button>
                            </div>  
                        <div className="selectedMoviesinList">
                          <ul>

                            {
                              listName.info.list.map((listItem, index) => {
                                return (
                                  <li key={`${listName.key}-${index}`}
                                    className="selectedMovies">
                                    {listItem}
                                    <button onClick={() => { handleDeleteMovie(listName.key, index) }}
                                    >Delete Movie</button>
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




import React from 'react'

const SavedList = (props) => {
    const { userList, handleDeleteList } = props
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
                        </li>
                    
                    )
                })
            }
        </ul>
    )
}

export default SavedList



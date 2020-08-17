import React, { Component } from 'react';
import firebase from '../firebase';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Listening for user input and to create a new object in Firebase. When onClick, new list is created
// Delete button for the whole object (list)
// Display the Firebase object as a dropdown with a delete button on each item
// Button takes the movie data in the list and sends it to the next Component

class UserList extends Component {
    constructor() {
        super();
        this.state = {
            userList: [],
            userListName: '',
            movies: []
        }
    }

    componentDidMount() {
        const dbRef = firebase.database().ref();
        
        dbRef.on('value', (snapshot) => {

        const newState = [];

        const data = snapshot.val();

        for (let key in data) {
            const listData = {
                key: key,
                info: data[key],
              }
              // console.log(data[key])
            
            newState.push(listData);
        }

        this.setState({
            userList: newState
            })
        })

    }

    handleChange = (event) => {
        this.setState({
            userListName: event.target.value
        })
    }

    handleClick = (event) => {
        event.preventDefault();
        
        const newList = firebase.database().ref();

        // newList.push(this.state.movies);
        
        const dataToPush = {
          name: this.state.userListName,
          list: this.state.movies
        }

        newList.push(dataToPush);
        
        this.setState({
            userListName: ''
        })

        // this.props.getUserList(event, this.state.userList)
    }

    // Create handle to delete list
    handleDeleteList = (deleteList) => {
        const dbRef = firebase.database().ref();

        dbRef.child(deleteList).remove();
    }

    // handleAddMovie = () => {

    // }

    // TO DO: Create handle to delete movie
    handleDeleteMovie = (movieListKey, indexOfMovie) => {
      // Retrieve the two keys from render
      // Go to database and find record based on movielistkey
      // Inside of this record refer to list and find the index based on the indexOfMovie
      // Remove index from array!

      console.log(movieListKey, indexOfMovie)
      const dbRef = firebase.database().ref(`${movieListKey}/list`);

      dbRef.child(indexOfMovie).remove();



        // dbRef.child(deleteList).remove();
    }

    // TO DO: Create handle to toggle, open and close list


    render() {

        return(
            <div className="wrapper">
                
                <div className="formContainer">
                    <form action="text">

                        <fieldset>
                            <legend>Create your list</legend>
                                <div className="newListContainer">
                                    <label className="srOnly" htmlFor="newList">New list here</label>
                                    <input onChange={this.handleChange} type="text" name="newList" value={this.state.userListName} placeholder="New list here" id="newList" className="newList"/>
                                    <button className="newListButton" onClick={this.handleClick}>+</button>
                                </div>
                        </fieldset>
                        
                    </form>
                </div>


                {/* TO DO: FIGURE OUT WHY THERE ARE SIX ARRAYS IN CONSOLE LOG. WHY???!?!?!!*/}
                <ul className="movieListContainer">
                    {
                        this.state.userList.map((listName) => {
                            console.log(this.state.userList);
                            return(
                                <li className="movieList" key={listName.key}>

                                    <div className="movieListTitle">
                                        <p>{listName.info.name}</p>
                                        <button onClick={() => {this.handleDeleteList(listName.key)}}>Delete List</button>
                                    </div>
                                    
                                    {/* TO DO: Map list and connect to the handleDeleteMovie above */}
                                    <div className="selectedMoviesinList">
                                        <ul>
                                          
                                          {
                                            listName.info.list.map((listItem, index) => {
                                                return (
                                                  <li key={`${listName.key}-${index}`}
                                                    className="selectedMovies">
                                                    {listItem}
                                                      <button onClick={() => { this.handleDeleteMovie(listName.key, index)} }
                                                      >Delete Movie</button>
                                                  </li>
                                                )
                                              })
                                          }
                                        </ul>
                                    </div>
                                    {/* END: Map list and connect to the handleDeleteMovie above */}
                                    
                                    
                                </li>
                            
                            )
                        })
                    }
                </ul>

            </div>
        )
    }
}

export default UserList;
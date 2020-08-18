import React, { Component } from 'react';
import firebase from '../firebase';
import { discoverMovies } from '../helpers/api'
import { FormUserList } from '../components/'
import { SavedList } from '../components/'

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
                <FormUserList 
                handleChange={this.handleChange}
                handleClick={this.handleClick}
                userListName={this.state.userListName}
                />
                <SavedList 
                userList={this.state.userList}
                handleDeleteList={this.handleDeleteList}
                />

            </div>
        )
    }
}

export default UserList;
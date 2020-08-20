import React, { Component } from 'react';
import firebase from '../firebase';
import { FormUserList } from '../components/'
import { SavedList } from '../components/'

// Listening for user input and to create a new object in Firebase. When onClick, new list is created
// Delete button for the whole object (list)
// Display the Firebase object as a dropdown with a delete button on each item
// Button takes the movie data in the list and sends it to the next Component

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            userListName: '',
            movies: ['Start adding to this list']
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
            
            newState.push(listData);
          }
          // Send data to parent
            this.props.galleryInfo(newState);

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
        const dataToPush = {
          name: this.state.userListName,
          list: this.state.movies
        }

        newList.push(dataToPush);
        
        this.setState({
            userListName: ''
        })
    }

    // Create handle to delete list
    handleDeleteList = (deleteList) => {
        const dbRef = firebase.database().ref();

          dbRef.child(deleteList).remove();
    }

    // Handle to delete movie
    handleDeleteMovie = (movieListKey, indexOfMovie) => {
      const dbRef = firebase.database().ref(`${movieListKey}/list`);

      dbRef.child(indexOfMovie).remove();
  
    }
    

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
                handleDeleteMovie={this.handleDeleteMovie}
                />

            </div>
        )
    }
}

export default UserList;
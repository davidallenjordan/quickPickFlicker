import React, { Component } from 'react';
import firebase from '../firebase';
import { FormUserList } from '../components/'
import { SavedList } from '../components/'

// Merge's user's queries and Components
// Initializes firebase and pushes data structure to firebase as user creates a list

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: [],
      userListName: '',
      movies: ['Start adding to this list']
      }
  }

  // Initializes firebase and updates with state
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

  // Updates the state as user types
  handleChange = (event) => {
    this.setState({
      userListName: event.target.value
    })
  }

  // Pushes the list structure to firebase from user input
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

  // Deletes list from firebase 
  handleDeleteList = (deleteList) => {
    const dbRef = firebase.database().ref();
    dbRef.child(deleteList).remove();
  }

  // Deletes movie from list in firebase
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
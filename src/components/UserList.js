import React, { Component } from 'react';
import firebase from '../firebase';

// Listening for user input and to create a new object in Firebase. When onClick, new list is created
// Delete button for the whole object (list)
// Display the Firebase object as a dropdown with a delete button on each item
// Button takes the movie data in the list and sends it to the next Component

class UserList extends Component {
    constructor() {
        super();
        this.state = {
            userList: []
        }
    }

    handleChange = (event) => {
        this.setState({
            userList: event.target.value
        })
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log('Hello');
        const dbRef = firebase.database().ref('/watchList');
        
        dbRef.push(this.state.userList)

        this.setState({
            userList:[]
        })

        // this.props.getUserList(event, this.state.userList)
    }

    render() {
        return(
            <div>
                <form action="text">
                    <label className="srOnly" htmlFor="newList">New list here</label>
                    <input onChange={this.handleChange} type="text" name="newList" value={this.state.userList} placeholder="New list here" id="newList" />
                    <button onClick={this.handleClick}>Add list button +</button>
                </form>
                
                <ul>
                    {/* {
                        this.state.movies.map((selectedMovie) => {
                            return(
                            <li>{selectedMovie}</li>
                            )
                        })
                    } */}
                </ul>

                
            </div>
        )
    }
}

export default UserList;
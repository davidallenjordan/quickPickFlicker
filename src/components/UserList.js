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
            userList: [],
            userListName: ''
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

        const newList = firebase.database().ref(this.state.userListName);
        
        newList.push(this.state.userListName)

        this.setState({
            userListName: ''
        })

        // this.props.getUserList(event, this.state.userList)
    }

    render() {
        return(
            <div>
                <form action="text">
                    <label className="srOnly" htmlFor="newList">New list here</label>
                    <input onChange={this.handleChange} type="text" name="newList" value={this.state.userListName} placeholder="New list here" id="newList" />
                    <button onClick={this.handleClick}>+</button>
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
import React from 'react'

// Contains the form for the user to create lists
// Gets props from UserList.js

const FormUserList = (props) => {
  const { handleChange, handleClick, userListName } = props

  return (
    <div className="formContainer">

      <form action="text">
        <fieldset>
          <legend>Create your list</legend>

          <div className="newListContainer">
            <label className="srOnly" htmlFor="newList">New list here</label>
            <input onChange={handleChange} type="text" name="newList" value={userListName} placeholder="Add your list here" id="newList" className="newList"/>
            <button className="newListButton" onClick={handleClick}>+</button>
          </div>
          
        </fieldset>
                
      </form>
    </div>
  )
}

export default FormUserList
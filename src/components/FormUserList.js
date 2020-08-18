import React from 'react'

const FormUserList = (props) => {
    const { handleChange, handleClick, userListName } = props


    return (
        <div className="formContainer">
            <form action="text">
                <fieldset>
                    <legend>Create your list</legend>
                        <div className="newListContainer">
                            <label className="srOnly" htmlFor="newList">New list here</label>
                            <input onChange={handleChange} type="text" name="newList" value={userListName} placeholder="New list here" id="newList" className="newList"/>
                            <button className="newListButton" onClick={handleClick}>+</button>
                        </div>
                </fieldset>
                
            </form>
        </div>
  )
}

export default FormUserList
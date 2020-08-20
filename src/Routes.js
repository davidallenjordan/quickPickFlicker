import React from 'react'
import { QuickFlickPicker, UserList } from './container'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Router Component for changing views

const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path="/movie/:movieID" component={UserList} />  
      <Route exact path="/" component={QuickFlickPicker} />  
    </Router>
  )
}

export default Routes
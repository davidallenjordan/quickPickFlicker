import React from 'react'
import { 
  QuickFlickPicker,
  MovieDetails ,
  UserList,
} from './container'

import { BrowserRouter as Router, Route } from 'react-router-dom'

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={UserList} />  
      <Route exact path="/" component={QuickFlickPicker} />  
      <Route exact path="/movie/:movieID" component={MovieDetails} />
    </Router>
  )
}

export default Routes
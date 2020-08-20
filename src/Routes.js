import React from 'react'
import { 
  QuickFlickPicker,
  MovieDetails ,
  UserList,
} from './container'

import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { SearchBar } from './components'

const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {/* <Route exact path="/" component={UserList} />   */}
      <Route exact path="/movie/:movieID" component={UserList} />  
      {/* <Route exact path="/" component={SearchBar} /> */}
      <Route exact path="/movie/:movieID" component={MovieDetails} />

      <Route exact path="/" component={QuickFlickPicker} />  
    </Router>
  )
}

export default Routes
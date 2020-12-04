import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import { Index } from '../pages'
import UserProfile from '../pages/user/profile'
import About from '../pages/about'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/user/profile/:username" component={UserProfile} />
      <Route path="/about" component={About} />
    </Switch>
  )
}

export default Routes

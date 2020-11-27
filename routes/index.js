import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import { Index } from '../pages/index'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Index} />
        </Switch>
    )
}

export default Routes

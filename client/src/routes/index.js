import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from '../screens/Home'
import Dashboard from '../screens/Dashboard'

const Routes = ({ user, setUser, clearUser, addItem, getItems }) => {
    <Switch>
        <Route
        exact
        path="/"
        render={props => (user ? <Home /> : <Dashboard {...props} />)}
        />
    </Switch>
}

export default Routes
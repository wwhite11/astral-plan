import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../screens/Home'
import Dashboard from '../screens/Dashboard'
import SignUp from '../screens/SignUp'
import SignIn from '../components/shared/SignIn'

const Routes = ({ user, setUser }) => (
    <Switch>
        <Route
        exact
        path="/"
        render={props => (user ? <Dashboard /> : <Home {...props} />)}
        />
        <Route
        path="/signup"
        render={props => <SignUp {...props} setUser={setUser} />}
        />
        <Route
        path="/signin"
        render={props => <SignIn {...props} setUser={setUser} />}
        />
    </Switch>
)

export default Routes
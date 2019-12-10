import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../screens/Home'
import Dashboard from '../screens/Dashboard'
import SignUp from '../screens/SignUp'
import SignIn from '../components/shared/SignIn'
import CreateSystem from '../screens/CreateSystem'

const Routes = ({ user, setUser, createSystem }) => (
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
        <Route 
        path="/create-system"
        render={props => <CreateSystem {...props} createSystem={createSystem} />}
        />
    </Switch>
)

export default Routes
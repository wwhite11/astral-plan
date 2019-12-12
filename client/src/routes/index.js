import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../screens/Home'
import Dashboard from '../screens/Dashboard'
import SignUp from '../screens/SignUp'
import SignIn from '../components/shared/SignIn'
import CreateSystem from '../screens/CreateSystem'
import UpdateSystem from '../screens/UpdateSystem'
import UpdateUser from '../screens/UpdateUser'
import Stars from '../screens/Stars'
import Star from '../screens/Star'
import SignOut from '../components/shared/SignOut'
import AuthenticatedRoute from './AuthenticatedRoute'
import CreatePlanet from '../screens/CreatePlanet'

const Routes = ({ user, setUser, clearUser, createSystem, updateSystem, createPlanet, updateUser }) => (
    <Switch>
        <Route
        exact
        path="/"
        render={props => (user ? <Dashboard user={user} {...props} /> : <Home user={user} {...props} />)}
        />
        <Route
        path="/sign-up"
        render={props => <SignUp {...props} setUser={setUser} />}
        />
        <Route
        path="/sign-in"
        render={props => <SignIn {...props} setUser={setUser}  user={user} />}
        />
        <Route
        exact
        path="/sign-out"
        render={props => <SignOut {...props} clearUser={clearUser} user={user} />}
        />
        <Route 
        exact
        path="/stars"
        render={props => <Stars {...props} user={user} />}
        />
        <Route 
        exact
        path="/stars/:id"
        render={props => <Star {...props} />}
        />
        <AuthenticatedRoute 
        exact
        user={user}
        path="/create-system"
        render={props => <CreateSystem {...props} user={user} createSystem={createSystem} />}
        />
        <AuthenticatedRoute 
        exact
        user={user}
        path="/update-system/:id"
        render={props => <UpdateSystem {...props} updateSystem={updateSystem} user={user} />}
        />
        <Route 
        exact
        user={user}
        path='/stars/:star_id/create-planet'
        render={props => <CreatePlanet {...props} createPlanet={createPlanet} user={user} />}
        />
        <AuthenticatedRoute
        exact
        user={user}
        path="/users/:user_id/update"
        render={props => <UpdateUser {...props} setUser={setUser} user={user} />}
        />
    </Switch>
)

export default Routes
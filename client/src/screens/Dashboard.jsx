import React from 'react'
import { NavLink } from 'react-router-dom'
import UserStars from '../components/shared/UserStars'

const Dashboard = (props) => {
    return (
        <div>
            <h1>ASTRAL PLAN</h1>
            <NavLink to='/create-system'><button>+ CREATE STAR</button></NavLink>
            <h3>Your Systems</h3>
            <UserStars user={props.user}/>
        </div>
    )
}

export default Dashboard
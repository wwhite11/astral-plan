import React from 'react'
import { NavLink } from 'react-router-dom'
import UserStars from '../components/shared/UserStars'

const Dashboard = () => {
    return (
        <div>
            <h1>ASTRAL PLAN</h1>
            <NavLink to='/create-system'><button>+ CREATE STAR</button></NavLink>
            <h3>Your Systems</h3>
            <UserStars />
        </div>
    )
}

export default Dashboard
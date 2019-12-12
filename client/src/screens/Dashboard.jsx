import React from 'react'
import { NavLink } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <h1>ASTRAL PLAN</h1>
            <h3>Your Systems</h3>
            <NavLink to='/create-system'><button>+ CREATE STAR</button></NavLink>
        </div>
    )
}

export default Dashboard
import React from 'react'
import { NavLink } from 'react-router-dom'
import UserStars from '../components/shared/UserStars'

const Dashboard = (props) => {
    return (
        <div>
            <h1 className='dash-header'>ASTRAL PLAN</h1>
            <div className='username-create'>
                <h3>{props.user.username}'s Systems</h3>
                <NavLink to='/create-system'><button>+ CREATE STAR</button></NavLink>
            </div>
            <UserStars user={props.user}/>
        </div>
    )
}

export default Dashboard
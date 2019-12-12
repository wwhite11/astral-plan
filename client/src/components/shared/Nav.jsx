import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
	<nav>
		<NavLink className='navbar' to='/'>HOME</NavLink>
		<NavLink className='navbar' to='/sign-in'>SIGN IN</NavLink>
        <NavLink className='navbar' to='/sign-up'>SIGN UP</NavLink>
	</nav>
)

export default Nav
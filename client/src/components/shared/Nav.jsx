import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = (props) => {
	const signIn = 'SIGN IN'
	const allSystems = 'ALL SYSTEMS'
	const signUp = 'SIGN UP'
	const signOut = 'SIGN OUT'
	return (
		<nav>
			<NavLink className='navbar' user={props.user} to='/'>HOME</NavLink>
			<NavLink className='navbar' user={props.user} to={props.user ? '/stars' : '/sign-in'}>{props.user ? allSystems : signIn}</NavLink>
			<NavLink className='navbar' user={props.user} to={props.user ? '/sign-out' : '/sign-up'}>{props.user ? signOut : signUp}</NavLink>
		</nav>
	)
	}

export default Nav
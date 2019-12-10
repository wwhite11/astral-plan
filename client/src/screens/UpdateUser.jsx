import React from 'react'
import UserForm from '../components/shared/UserForm'

const UpdateUser = (props) => {
    return (
        <>
        <div>Update User Info: {props.user.id}</div>
        <UserForm setUser={props.setUser} user={props.user.id} />
        </>        
    )
}

export default UpdateUser
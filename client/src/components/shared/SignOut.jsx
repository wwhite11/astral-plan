import React from 'react'
import { signOut } from '../../services/auth'

class SignOut extends React.Component {
    componentDidMount() {
        const { history, clearUser, user } = this.props
        signOut(user)
        .then(() => clearUser())
        .finally(() => history.push('/'))
    }
    
    render() {
        return ''
    }
}

export default SignOut
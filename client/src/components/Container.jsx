import React from 'react'
import SignUp from '../screens/SignUp'
import Routes from '../routes'

class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            user: null
        }
    }
    render() {
        const { user } = this.state
        return (
            <div>
                <h1>Hello World</h1>
                <SignUp />
                <Routes 
                user={user}
                setUser={this.setUser} 
                />
            </div>
        )
    }
}

export default Container
import React from 'react'
import Routes from '../routes'

class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            user: null
        }
    }
    
    componentDidMount() {
      }

    setUser = user => this.setState({ user });

    render() {
        const { user } = this.state
        return (
            <div>
                <h1>Hello World</h1>
                <Routes 
                user={user}
                setUser={this.setUser} 
                />
            </div>
        )
    }
}

export default Container
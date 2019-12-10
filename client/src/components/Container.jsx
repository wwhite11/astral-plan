import React from 'react'
import Routes from '../routes'
import Nav from '../components/shared/Nav'

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
                <Nav />
                <Routes 
                user={user}
                setUser={this.setUser} 
                />
            </div>
        )
    }
}

export default Container
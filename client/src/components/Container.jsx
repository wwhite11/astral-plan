import React from 'react'
import Routes from '../routes'
import Nav from '../components/shared/Nav'
import { TOKEN_KEY } from '../services/apiConfig.js'

class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            user: null
        }
    }
    
    componentDidMount() {
        this.checkToken();
      }

    checkToken() {
        const jwt = require('jsonwebtoken');
        const JwtToken = localStorage.getItem('token') || null;
        const data = JwtToken ? jwt.verify(JwtToken, TOKEN_KEY) : null;
        this.setState(state => ({
            user: data
        }))
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
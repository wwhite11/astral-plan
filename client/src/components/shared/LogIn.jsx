import React, { Component } from 'react'
import { logInUser } from '../../services/auth'

class LogIn extends Component {
    constructor () {
        super()

        this.state = {
            username: '',
            password: '',
            isError: false,
            errorMsg: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            isError: false,
            errorMsg:  ''
        })
    }

    onLogIn = event => {
        event.preventDefault()

        const { history, setUser } = this.props

        logInUser(this.state)
        .then(res => setUser(res.user))
        .then(() => history.push('/'))
        .catch(error => {
            console.error(error)
            this.setState({
                isError: true,
                errorMsg: 'Invalid Username or Password',
                username: '',
                password: ''
            })
        })
    }

    renderError = () => {
        const toggleForm = this.state.isError ? 'danger' : ''
        if (this.state.isError) {
            return (
                <button type="submit" className={toggleForm}>
                    {this.state.errorMsg}
                </button>
            )
        } else {
            return <button type="submit">Log In</button>
        }
    }

    render() {
        const { username, password } = this.state

        return (
            <div className="row">
                <div className="form-container">
                    <h3>Log In</h3>
                    <form onSubmit={this.onSignIn}>
                        <label>Username</label>
                        <input
                        required
                        type="text"
                        name="username"
                        value={username}
                        placeholder="Enter Username"
                        onChange={this.handleChange}
                        />
                        {this.renderError()}
                    </form>
                </div>
            </div>
        )
    }
}

export default LogIn
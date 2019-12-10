import React, { Component } from 'react'
import { signUp, signInUser, getUserForUpdate, updateUser } from '../../services/auth'

class UserForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      isError: false,
      errorMsg: ''
    }
  }

  componentDidMount = async () => {
      const user = await this.populateForm();
      user && this.setState(state => ({
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
          })
      )
  }

  populateForm = async () => {
    const user = await getUserForUpdate(this.props.user);
    return user.user
  }

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value,
      isError: false,
      errorMsg: ''
    })

  onSignUp = event => {
    event.preventDefault()

    const { history, setUser } = this.props

    signUp(this.state)
      .then(() => signInUser(this.state))
      .then(res => setUser(res.user))
//      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({
          email: '',
          password: '',
          passwordConfirmation: '',
          isError: true,
          errorMsg: 'Sign Up Details Invalid'
        })
      })
  }

  onUpdate = event => {
      event.preventDefault()
      const { setUser } = this.props
      const userData = {
          username: this.state.username,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password
      }
      updateUser(this.props.user, userData)      
      .then(() => signInUser(userData))
      .then(res => setUser(res.user))
      .catch(error => {
        console.error(error);
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
      return this.props.user ? <button type="submit">Update</button> : <button type="submit">Sign Up</button>
    }
  }

  render() {
    const { email, username, firstName, lastName, password, passwordConfirmation } = this.state

    return (
      <div className="row">
        <div className="form-container">
          <h3>{ this.props.user ? 'Edit your info' : 'Sign Up' }</h3>
          <form onSubmit={this.props.user ? this.onUpdate : this.onSignUp}>
            <label>Username</label>
            <input
              required
              type="text"
              name="username"
              value={username}
              placeholder="Enter username"
              onChange={this.handleChange}
            />
            <label>First name</label>
            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              placeholder="Enter your first name"
              onChange={this.handleChange}
            />
            <label>Last name</label>
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              placeholder="Enter your last name"
              onChange={this.handleChange}
            />
            <label>Email address</label>
            <input
              required
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={this.handleChange}
            />
            <label>Password</label>
            <input
              required
              name="password"
              value={password}
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
            <label>Password Confirmation</label>
            <input
              required
              name="passwordConfirmation"
              value={passwordConfirmation}
              type="password"
              placeholder="Confirm Password"
              onChange={this.handleChange}
            />
            {this.renderError()}
          </form>
        </div>
      </div>
    )
  }
}

export default UserForm
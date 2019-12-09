import React from 'react'
import axios from 'axios'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            stars: []
        }
    }
    render() {
        return (
            <h1>Home</h1>
        )
    }
}

export default Home
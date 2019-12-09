import React from 'react'
import { getStars } from '../services'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            stars: []
        }
    }

    async componentDidMount() {
        this.fetchStars()
        console.log(this.state.stars)
    }
    
    fetchStars = async () => {
        try {
        const stars = await getStars()
        this.setState({ stars })
        } catch (err) {
        console.error(err)
        }
    }

    render() {
        return (
            <h1>Home</h1>
        )
    }
}

export default Home
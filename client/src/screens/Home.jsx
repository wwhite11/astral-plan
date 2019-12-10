import React from 'react'
import { getStars } from '../services'
import System from '../components/shared/System'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stars: []
        }
    }

    async componentDidMount() {
        this.fetchStars()
    }
    
    fetchStars = async () => {
        try {
        const stars = await getStars()
        this.setState({ stars })
        } catch (err) {
        console.error(err)
        }
        console.log(this.state.stars)
    }

    render() {
        const systems = this.state.stars.map(star => {
            return (
                <div key={star.id}>
                    <h3>Star name: {star.name}</h3>
                    <h4>Planets: {star.Planets.length}</h4>
                </div>
            )
        })
        return (
            <div>
                <h1>ASTRAL PLAN</h1>
                <System />
                <ul>
                    {systems}
                </ul>
            </div>
        )
    }
}

export default Home
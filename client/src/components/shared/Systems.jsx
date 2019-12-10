import React from 'react'
import { getStars } from '../../services'

class Systems extends React.Component {
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
                    <h3>Star Name: {star.name}</h3>
                    <div className="star" style={{backgroundColor: star.color}}></div>
                    <h4>Planets: {star.Planets.length}</h4>
                    <ul>
                        {star.Planets.map(planet => {
                            return (
                                <div key={planet.id}>
                                    <h5>Planet Name: {planet.name}</h5>
                                    <div className="planet" style={{backgroundColor: planet.baseColor}}></div>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            )
        })
        return (
            <div>
                <h1>ASTRAL PLAN</h1>
                <ul>
                    {systems}
                </ul>
            </div>
        )
    }
}

export default Systems
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
                <div className='system' key={star.id}>
                    <div className='star-planets'>
                    <div className="star" style={{backgroundColor: star.color}}></div>
                    <div className='planets'>
                        {star.Planets.map(planet => {
                            return (
                                <div key={planet.id}>
                                    <div className="planet" style={{backgroundColor: planet.baseColor}}></div>
                                </div>
                            )
                        })}
                    </div>
                    </div>
                    <div className='star-planets-moons'>
                        <h3>Star Name: {star.name}</h3>
                        <h4>Planets: {star.Planets.length}</h4>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <ul>
                    {systems}
                </ul>
            </div>
        )
    }
}

export default Systems
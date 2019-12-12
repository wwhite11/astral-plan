import React from 'react'
import { getStars } from '../../services'
import { Link } from 'react-router-dom'

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
        this.moonCounter(stars)
        this.setState({ stars })
        } catch (err) {
        console.error(err)
        }
        console.log(this.state.stars)
    }

    moonCounter = (starData) => {
        // adds moonCount attribute to each star object for total number of moons in system
        starData.forEach(star => {
          let moonCount = 0
          star.Planets.forEach(planet => moonCount += planet.Moons.length)
          star.moonCount = moonCount
        })
    }

    render() {
        const systems = this.state.stars.map(star => {
            console.log(this.props.user.username, star.username)
            const edit = this.props.user.id === star.userId ? (<Link to={`/update-system/${star.id}`}>Update this star</Link>) : null;
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
                        { edit }
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
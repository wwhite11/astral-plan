import React from 'react'
import { getStarsByUser } from '../../services/index'
import { NavLink, Link } from 'react-router-dom'
import sunTexture from '../../images/sun-texture.jpeg' 

class UserStars extends React.Component {
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
            const stars = await getStarsByUser(this.props.user.id)
            this.setState({ stars })
            console.log(this.props.user.id)
        } catch (err) {
            console.log(err)
        }
    }
    render() {
        const stars = this.state.stars.map(star => {
            return (
                <div>
                    <p>Star Name: {star.name}</p>
                    <div className='star-render' style={{backgroundColor: star.color, width: parseInt(star.size), height: parseInt(star.size)}}>
                        <img src={sunTexture} className='sun-texture' style={{width: parseInt(star.size), height: parseInt(star.size)}} alt='sun'/>
                    </div>
                    <div>
                        {star.Planets.map(planet => {
                            return (
                                <div className='planet-render' style={{backgroundColor: planet.baseColor, width: parseInt(planet.size), height: parseInt(planet.size)}}></div>
                            )
                        })}
                    </div>
                    <NavLink to={`/stars/${star.id}/create-planet`}><button>+ ADD PLANET</button></NavLink>
                    <Link to={`/update-system/${star.id}`}><button>:: UPDATE SYSTEM </button></Link>
                </div>
            )
        })
        return (
            <div>{stars}</div>
        )
    }
}

export default UserStars
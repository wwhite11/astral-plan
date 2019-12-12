import React from 'react'
import { getStarsByUser } from '../../services/index'
import { NavLink } from 'react-router-dom'

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
                    <div className='star-render' style={{backgroundColor: star.color, width: parseInt(star.size), height: parseInt(star.size)}}></div>
                    <NavLink to='/create-planet'><button>+ ADD PLANET</button></NavLink>
                </div>
            )
        })
        return (
            <div>{stars}</div>
        )
    }
}

export default UserStars
import React from 'react'
import { getStarsByUser } from '../../services/index'

class UserStars extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stars: []
        }
    }

    async componentDidMount() {
        this.fetchStars()
        console.log(this.state.stars)
    }

    fetchStars = () => {
        try {
            const stars = getStarsByUser(this.props.user.id)
            this.setState({ stars })
        } catch (err) {
            console.log(err)
        }
    }
    render() {
        return (
            <div>Hello</div>
        )
    }
}

export default UserStars
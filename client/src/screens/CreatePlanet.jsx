import React from 'react'
import PlanetForm from '../components/shared/PlanetForm'
import '../styles/CreatePlanet.css'
import { createPlanet } from '../services'

class CreatePlanet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            baseColor: 'red',
            size: 50,
            distance: 50,
            year: 50,
            composition: 'solid',
            surface: 'craters',
            rings: 'none'
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        createPlanet(this.props.user.id, this.props.match.params.star_id, this.state)
        //   .then(res =>
        //     res.status === 201
        //       ? this.setState({ createdStar: res.data.star })
        //       : null
        //   )
          .catch(console.error)
      }

    render() {
        const { name, composition, size, baseColor, surface, rings, distance, year } = this.state
        return (
            <div className='create-planet'>
                <div className='planet-form'>
                    <PlanetForm 
                    formData={{name, composition, size, baseColor, surface, rings, distance, year}}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    />
                </div>
                <div>
                    <p>{name}</p>
                    <div 
                    className='planet-render' 
                    style={{
                        backgroundColor: baseColor, 
                        width: parseInt(size), 
                        height: parseInt(size)
                        }}>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePlanet
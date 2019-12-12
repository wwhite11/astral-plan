import React from 'react'
import PlanetForm from '../components/shared/PlanetForm'
import '../styles/CreatePlanet.css'

class CreatePlanet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            color: '',
            size: 50,
            distance: '',
            year: '',
            composition: '',
            surface: '',
            rings: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { name, color, size } = this.state
        return (
            <div className='create-planet'>
                <div className='planet-form'>
                    <PlanetForm 
                    formData={{name, color, size}}
                    onChange={this.handleChange}
                    />
                </div>
                <div>
                    <p>{name}</p>
                    <div 
                    className='planet-render' 
                    style={{
                        backgroundColor: color, 
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
import React from 'react'
import PlanetForm from '../components/shared/PlanetForm'

class CreatePlanet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            color: '',
            size: '',
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
            <div>
                <PlanetForm 
                formData={{name, color, size}}
                onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default CreatePlanet
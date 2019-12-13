import React from 'react'
import PlanetForm from '../components/shared/PlanetForm'
import Button from '../components/shared/Button'
import '../styles/CreateSystem.css'
import { updatePlanet, getPlanetById, deletePlanet } from '../services'
import iceTexture from '../images/ice-texture.png'
import craterTexture from '../images/crater-texture.png'
import volcanicTexture from '../images/volcanic-texture.png'

class UpdatePlanet extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            name: '',
            baseColor: 'red',
            size: 50,
            distance: 50,
            year: 50,
            composition: 'solid',
            surface: 'craters',
            rings: 'none',
            starId: null
        }
    }

    componentDidMount = async () => {
        const planetData = await this.getPlanetToUpdate(this.props.match.params.id)
        console.log(planetData)
        const { name, size, composition, baseColor, surface, rings, distance, year, starId } = planetData
        this.setState({ name, size, composition, baseColor, surface, rings, distance, year, starId })
    }

    getPlanetToUpdate = async (id) => {
        return await getPlanetById(id)
    }

    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        updatePlanet(this.props.user.id, this.props.match.params.id, this.state)
        .then(this.props.history.push(`/stars/${this.state.starId}`))
        .catch(console.error)
    }

    handleDelete = event => {
        event.preventDefault()
        deletePlanet(this.props.match.params.id, this.props.user.id)
        .then(this.props.history.push(`/stars/${this.state.starId}`))
        .catch(console.error)
    }
    
    render() {
        const { name, size, composition, baseColor, surface, rings, distance, year } = this.state
        return (
          <div>
              <div>
                  <div className='star-render' 
                  style={{width: parseInt(size)*2, 
                  height: parseInt(size)*2, 
                  backgroundColor: baseColor}}>
                      <img src={volcanicTexture} className='sun-texture' style={{width: parseInt(size)*2, height: parseInt(size)*2}}/>
                  </div>
                  <p>{name}</p>
              </div>
              <PlanetForm 
              formData={{ name, size, composition, baseColor, surface, rings, distance, year }}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit} 
              />
              <Button message="Delete this planet" callback={this.handleDelete} />
          </div>
    );
  }
}

export default UpdatePlanet
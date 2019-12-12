import React from 'react'
import PromptModal from '../components/shared/PromptModal'
import Button from '../components/shared/Button'
import '../styles/CreateSystem.css'
import { updateStar, getStarById, deleteStar } from '../services'
import sunTexture from '../images/sun-texture.jpeg'

class UpdateSystem extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            name: '',
            size: 50,
            color: '',
            createdStar: null
        }
    }

    componentDidMount = async () => {
        const starData = await this.getStarToUpdate(this.props.match.params.id)
        const { name, size, color } = starData
        this.setState({ name, size, color })
    }

    getStarToUpdate = async (id) => {
        return await getStarById(id)
    }

    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        updateStar(this.props.user.id, this.props.match.params.id, this.state)
        .then(res => res.status === 200 
            ? this.setState({ createdStar: res.star })
            : null
        )
        .catch(console.error)
    }

    handleDelete = event => {
        event.preventDefault()
        deleteStar(this.props.match.params.id, this.props.user.id)
        .then(this.props.history.push('/'))
        .catch(console.error)
    }
    
    render() {
        const { name, size, color } = this.state
        return (
          <div>
              <div>
                  <div className='star-render' 
                  style={{width: parseInt(size), 
                  height: parseInt(size), 
                  backgroundColor: color}}>
                      <img src={sunTexture} className='sun-texture' style={{width: parseInt(size), height: parseInt(size)}}/>
                  </div>
                  <p>{name}</p>
              </div>
              <PromptModal 
              formData={{name, size, color}}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit} 
              />
              <Button message="Delete this star" callback={this.handleDelete} />
          </div>
    );
  }
}

export default UpdateSystem
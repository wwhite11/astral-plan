import React from 'react'
import PromptModal from '../components/shared/PromptModal'
import '../styles/CreateSystem.css'
import { updateStar, getStarById } from '../services'

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
    
    render() {
        const { name, size, color } = this.state
        return (
          <div>
              <PromptModal 
              formData={{name, size, color}}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit} 
              />
              <div>
                  <div className='star-render' 
                  style={{width: parseInt(size), 
                  height: parseInt(size), 
                  backgroundColor: color}}></div>
                  <p>{name}</p>
              </div>
          </div>
    );
  }
}

export default UpdateSystem
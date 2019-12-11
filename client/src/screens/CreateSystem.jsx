import React from 'react'
import PromptModal from '../components/shared/PromptModal'
import '../styles/CreateSystem.css'
import { createStar } from '../services'

class CreateSystem extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            name: '',
            size: 150,
            color: '',
            createdStar: null
        }
    }

    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    createStar(this.state)
      .then(res =>
        res.status === 201
          ? this.setState({ createdStar: res.data.item })
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

export default CreateSystem





// const CreateSystem = () => {
//     return (
//         <div>Create System Component</div>
//     )
// }

// export default CreateSystem
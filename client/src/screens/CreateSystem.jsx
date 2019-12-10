import React from 'react'
import PromptModal from '../components/shared/PromptModal'

class CreateSystem extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            name: '',
            size: '',
            color: '',
        }
    }
    toggleModal = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    
      render() {
        return (
          <div className="App">
            <button onClick={this.toggleModal}>
              Create
            </button>
    
            <PromptModal show={this.state.isOpen}
              onClose={this.toggleModal}>
              `Here's some content for the modal`
            </PromptModal>
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
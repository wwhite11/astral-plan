import React from 'react';

const PromptModal = (props) => {
  const { name, size, color } = props.formData
  const { onChange, onSubmit } = props
  return (
    <div className='star-form'>
                <div> What is the name of your Star?
                  <input type="text" name="name" value={name} onChange={(e) => onChange(e)}/>
                </div>
                <div> What is the Size of your Star?
                  <input type="range" min='100' max='200' name="size" value={size} onChange={(e) => onChange(e)}/>
                </div>
                <div> What is the color of your Star?
                  <select type="text" name="color" value={color} onChange={(e) => onChange(e)}>
                    <option value='blue'>blue</option>
                    <option value='white'>white</option>
                    <option value='yellow'>yellow</option>
                    <option value='orange'>orange</option>
                    <option value='red'>red</option>
                  </select>
                </div>
                <div>
                  <input type='submit' value='submit' onSubmit={onSubmit}/>
                </div>
              </div>
  )
}

export default PromptModal;
import React from 'react';

const PromptModal = (props) => {
  const { name, size, color } = props.formData
  const { onChange, onSubmit } = props
  return (
    <form className='star-form' onSubmit={onSubmit}>
      <div> What is the name of your star?
        <input type="text" name="name" value={name} onChange={(e) => onChange(e)}/>
      </div>
      <div> What is the Size of your star?
        <input type="range" min='100' max='300' name="size" value={size} onChange={(e) => onChange(e)}/>
      </div>
      <div> What is the color of your star?
        <select type="text" name="color" value={color} onChange={(e) => onChange(e)}>
          <option value='blue'>blue</option>
          <option value='white'>white</option>
          <option value='yellow'>yellow</option>
          <option value='orange'>orange</option>
          <option value='red'>red</option>
        </select>
      </div>
      <div>
        <input type='submit' value='submit' />
      </div>
    </form>
  )
}

export default PromptModal;
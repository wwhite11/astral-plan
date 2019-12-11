import React from 'react'

const PlanetForm = (props) => {
    const { onChange, onSubmit } = props
	const { name, color, size } = props.formData
    return (
        <div>
            <div>
                <label>Planet Name</label>
                <input type='text' name='name' value={name} onChange={(e) => onChange(e)}/>
            </div>
            <div>
                <label>Color</label>
                <select name='color' value={color} onChange={(e) => onChange(e)}>
                    <option value='red'>red</option>
                    <option value='orange'>orange</option>
                    <option value='yellow'>yellow</option>
                    <option value='green'>green</option>
                    <option value='blue'>blue</option>
                    <option value='purple'>purple</option>
                </select>
            </div>
            <div>
                <label>Size</label>
                <input name='size' value={size} type='range' min='1' max='100' onChange={(e) => onChange(e)}/>
            </div>
        </div>
    )
}

export default PlanetForm
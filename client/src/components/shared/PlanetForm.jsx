import React from 'react'

const PlanetForm = (props) => {
    const { onChange, onSubmit } = props
	const { name, composition, size, baseColor, surface, rings, distance, year } = props.formData
    return (
        <>
            <form className='panet-inputs' onSubmit={onSubmit}>
                <div>
                    <label htmlFor='name'>Planet Name</label>
                    <input type='text' name='name' value={name} onChange={(e) => onChange(e)}/>
                </div>
                <div>
                    <label htmlFor='composition'>Composition</label>
                    <select name='composition' value={composition} onChange={(e) => onChange(e)}>
                        <option value='gas'>gas</option>
                        <option value='solid'>solid</option>
                        <option value='liquid'>liquid</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='size'>Size</label>
                    <input name='size' value={size} type='range' min='1' max='100' onChange={(e) => onChange(e)}/>
                </div>
                <div>
                    <label htmlFor='baseColor'>Color</label>
                    <select name='baseColor' value={baseColor} onChange={(e) => onChange(e)}>
                        <option value='red'>red</option>
                        <option value='orange'>orange</option>
                        <option value='yellow'>yellow</option>
                        <option value='green'>green</option>
                        <option value='blue'>blue</option>
                        <option value='purple'>purple</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='surface'>Surface</label>
                    <select name='surface' value={surface} onChange={(e) => onChange(e)}>
                        <option value='smooth'>smooth</option>
                        <option value='bands'>bands</option>
                        <option value='cloud'>clouds</option>
                        <option value='craters'>craters</option>
                        <option value='volcanic'>volcanic</option>
                        <option value='ice'>ice</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='rings'>Rings</label>
                    <select name='rings' value={rings} onChange={(e) => onChange(e)}>
                        <option value='none'>none</option>
                        <option value='faint'>faint</option>
                        <option value='bold'>bold</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='distance'>Distance from star</label>
                    <input name='distance' value={distance} type='range' min='1' max='100' onChange={(e) => onChange(e)}/>
                </div>
                <div>
                    <label htmlFor='year'>Length of year</label>
                    <input name='year' value={year} type='range' min='1' max='100' onChange={(e) => onChange(e)}/>
                </div>
                <div>
                    <input type='submit' value='submit' />
                </div>
            </form>
        </>
    )
}

export default PlanetForm
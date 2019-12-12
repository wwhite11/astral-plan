import React from 'react'
import Systems from '../components/shared/Systems'

const Home = (props) => {
    return (
        <div>
            <div className='home-header'>
                <h1>ASTRAL PLAN</h1>
                <h4 className='sub-header'>Create your own fantasy Solar System!</h4>
            </div>
            <div className='home-star'></div>
            <Systems user={props.user} />
        </div>
    )
}

export default Home
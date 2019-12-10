import React from 'react'
import Systems from '../components/shared/Systems'

const Home = () => {
    return (
        <div>
            <div className='home-header'>
                <h1>ASTRAL PLAN</h1>
                <h4 className='sub-header'>Create your own fantasy Solar System!</h4>
            </div>
            <div className='home-star'></div>
            <Systems />
        </div>
    )
}

export default Home
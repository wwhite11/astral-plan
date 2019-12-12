import React from 'react'
import { getStarById } from '../services'


class Star extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            star: null
        }
    }

    async componentDidMount() {
        try {
        const star = await getStarById(this.props.match.params.id)
        this.setState({ star })
        } catch (err) {
        console.error(err)
        }
    }

    render() {
        const { star } = this.state
        if (!star) {
            return <p>Loading...</p>
        }
        return (
            <div>
                <h2>Star Name: {star.name}</h2>
                <p>Color: {star.color}</p>
                <p>Size: {star.size}</p>
                <div className='star' style={{backgroundColor: star.color}}></div>
                <ul>
                    {star.Planets.map(planet => {
                        return (
                            <div key={planet.id}>
                                <h3>Planet Name: {planet.name}</h3>
                                <p>Color: {planet.baseColor}</p>
                                <p>Size: {planet.size}</p>
                                <p>Distance: {planet.distance}</p>
                                <p>Year: {planet.year}</p>
                                <p>Composition: {planet.composition}</p>
                                <p>Surface: {planet.surface}</p>
                                <p>Rings: {planet.rings}</p>
                                <div className='planet' style={{backgroundColor: planet.baseColor}}></div>
                                <ul>
                                    {planet.Moons.map(moon => {
                                        return (
                                            <div key={moon.id}>
                                                <h4>Moon Name: {moon.name}</h4>
                                                <p>Color: {moon.baseColor}</p>
                                                <p>Size: {moon.size}</p>
                                                <p>Distance: {moon.distance}</p>
                                                <p>Surface: {moon.surface}</p>
                                                <div className='moon' style={{backgroundColor: moon.baseColor}}></div>
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </ul>
            </div>
        )
    }

}

export default Star
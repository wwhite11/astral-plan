const { User, Star, Planet, Moon } = require('../models');
const sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SALT_ROUNDS = 11;
const TOKEN_KEY = '0fbfec5e1c6701506ab3f8a3162990ba';

// user account calls

const signup = async (req, res) => {
	try {
		const { username, firstName, lastName, email, password } = req.body
		const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
		const user = await User.create({
			username,
            password_digest,
            firstName,
            lastName,
            email
		})
		const payload = {
			id: user.id,
			username: user.username,
			email: user.email
		}

		const token = jwt.sign(payload, TOKEN_KEY)
		return res.status(201).json({ user, token })
	} catch (error) {
		console.log(
			'You made it to the signup controller, but there was an error :('
		)
		return res.status(400).json({ error: error.message })
	}
}

const signin = async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({
			where: {
				username
			}
		})
		if (await bcrypt.compare(password, user.dataValues.password_digest)) {
			const payload = {
				id: user.id,
				username: user.username,
				email: user.email
			}

			const token = jwt.sign(payload, TOKEN_KEY)
			return res.status(201).json({ user, token })
		} else {
			res.status(401).send('Username and password do not match.')
		}
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

const getUser = async (req, res) => {
    try {
        const { user_id } = req.params;
        const user = await User.findOne({
            where: {id: user_id},
            include: [
                {
                    model: Star
                }
            ]
        });
        if (user) {
            return res.status(200).json({ user });
        }
        return res.status(404).send('The user with the specified ID does not exist.');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = res.locals.user; // from restrict
        const editId = req.params.user_id; // from routes
        const { password } = req.body
        const { username, firstName, lastName, email } = req.body
        if (id === Number(editId)) {
            const user = await User.findByPk(id);
            if (await bcrypt.compare(password, user.dataValues.password_digest)) {
                console.log('Match!');
                await user.update({ username, firstName, lastName, email })
            }
    	} else {
            console.log('No match!');
        }
        res.status(200).send('Nailed it!')
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
    }
}

// get stars

const getAllStars = async (req, res) => {
    try {
        const stars = await Star.findAll({
            order: [ sequelize.fn( 'RANDOM' ) ],
            limit: 2, // increase once db seed is larger
            include: [
                {
                    model: User,
                    attributes: [ 'username', 'firstName', 'lastName' ]
                },
                {
                    model: Planet,
                    include: [
                        {
                            model: Moon
                        }
                    ]
                }
            ]
        });
        return res.status(200).json({ stars });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getStar = async (req, res) => {
    try {
        const { star_id } = req.params;
        const star = await Star.findOne({
            where: {id: star_id},
            include: [
                {
                    model: User,
                    attributes: [ 'username', 'firstName', 'lastName' ]
                },
                {
                    model: Planet,
                    include: [
                        {
                            model: Moon
                        }
                    ]
                }
            ],
            order: [ sequelize.col('Planets.distance'), sequelize.col('Planets.Moons.distance') ]
        });
        if (star) {
            return res.status(200).json({ star });
        }
        return res.status(404).send('The star with the specified ID does not exist.');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

// create celestial objects

const createStar = async (req, res) => {
	try {
        const { name, size, color } = req.body
        const userId = req.params.user_id
		const star = await Star.create({
			name,
            size,
            color,
            userId
		})
		return res.status(201).json({ star })
	} catch (error) {
		console.log(
			'You made it to the createStar controller, but there was an error :('
		)
		return res.status(400).json({ error: error.message })
	}
}

const createPlanet = async (req, res) => {
	try {
        const { name, size, composition, baseColor, surface, rings, distance, year  } = req.body
        const starId = req.params.star_id
		const planet = await Planet.create({
			name,
            size,
            composition,
            baseColor,
            surface,
            rings,
            distance,
            year,
            starId
		})
		return res.status(201).json({ planet })
	} catch (error) {
		console.log(
			'You made it to the createPlanet controller, but there was an error :('
		)
		return res.status(400).json({ error: error.message })
	}
}

const createMoon = async (req, res) => {
	try {
        const { name, size, baseColor, surface, distance  } = req.body
        const planetId = req.params.planet_id
		const moon = await Moon.create({
			name,
            size,
            baseColor,
            surface,
            distance,
            planetId
		})
		return res.status(201).json({ moon })
	} catch (error) {
		console.log(
			'You made it to the createMoon controller, but there was an error :('
		)
		return res.status(400).json({ error: error.message })
	}
}

// export

module.exports = {
    TOKEN_KEY,
    signup,
    signin,
    updateUser,
    getUser,
    getStar,
    getAllStars,
    createStar,
    createPlanet,
    createMoon
}
const { User, Star, Planet, Moon } = require('../models');
const sequelize = require('sequelize');


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

const getAllStars = async (req, res) => {
    try {
        const stars = await Star.findAll({
            order: [ sequelize.fn( 'RANDOM' ) ],
            limit: 2, // increase once db seed is larger
            include: [
                {
                    model: Planet
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
                    model: Planet,
                    include: [
                        {
                            model: Moon
                        }
                    ]
                }
            ]
        });
        if (star) {
            return res.status(200).json({ star });
        }
        return res.status(404).send('The star with the specified ID does not exist.');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getUser,
    getStar,
    getAllStars
}
const axios = require('axios');
const DevModel = require('./../Models/Dev');
const stringToArray = require('./../Helpers/stringToArray');

module.exports = {
    async index (req, res) {
        const { latitude, longitude, skills } = req.query;
        const filters = {};
        if (skills) {
            filters.skills = {
                $in: stringToArray(skills)
            }
        }
        if (latitude && longitude) {
            filters.location = {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                }
            }
        }
        const devs = await DevModel.find(filters);
        return res.json(devs);
    },
    async store (req, res) {
        const { github_username, skills, latitude, longitude } = req.body;
        let dev = await DevModel.findOne({ github_username });
        if (dev !== null) {
            return res.json(dev);
        }

        const response = await axios.get(`https://api.github.com/users/${github_username}`);
        const { name = login, avatar_url, bio } = response.data;

        dev = await DevModel.create({
            github_username,
            name,
            avatar_url,
            bio,
            skills: stringToArray(skills),
            location: {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        }).catch((err) => {
            console.error(err);
        })

        return res.json(dev);
    }
}

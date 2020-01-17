const { Router } = require('express');
const axios = require('axios');
const DevModel = require('./Models/Dev');

const routes = Router();

routes.get('/', (req, res) => {
    return res.json({now: new Date});
});

routes.post('/devs', async (req, res) => {
    const { github_username, skills } = req.body;
    const response = await axios.get(`https://api.github.com/users/${github_username}`);
    const { name = login, avatar_url, bio } = response.data;
    const dev = await DevModel.create({
        github_username,
        name,
        avatar_url,
        bio,
        skills: skills.split(',').map(skill => skill.trim()),
    })
    return res.json(dev);
});

module.exports = routes;

const express = require('express');
const auth = require('../middlewares/auth');
const router = express.Router();

module.exports = (stories) => {
  router.get('/', (req, res) => {
    res.json(stories);
  });

  router.post('/', auth, (req, res) => {
    const { title, content } = req.body;
    const story = { _id: Date.now().toString(), userId: req.user.id, title, content, createdAt: new Date() };
    stories.push(story);
    res.json(story);
  });

  return router;
};

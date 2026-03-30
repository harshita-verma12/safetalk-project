const express = require('express');
const auth = require('../middlewares/auth');
const router = express.Router();

module.exports = (journals) => {
  router.get('/journals', auth, (req, res) => {
    const userJournals = journals.filter(j => j.userId === req.user.id).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    res.json(userJournals);
  });

  router.post('/journals', auth, (req, res) => {
    const { entry, mood } = req.body;
    const journal = { _id: Date.now().toString(), userId: req.user.id, entry, mood: mood || 'neutral', createdAt: new Date() };
    journals.push(journal);
    res.json(journal);
  });

  return router;
};

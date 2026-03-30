const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

module.exports = (users) => {
  router.post('/register', async (req, res) => {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) return res.status(400).json({ msg: 'Please provide all fields' });

      let user = users.find(u => u.email === email);
      if (user) return res.status(400).json({ msg: 'User already exists' });

      user = { id: Date.now().toString(), name, email, password: await bcrypt.hash(password, 10), bio: '', createdAt: new Date() };
      users.push(user);

      const payload = { user: { id: user.id } };
      const token = jwt.sign(payload, process.env.JWT_SECRET || 'safe-secret', { expiresIn: '7d' });

      res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });

  router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) return res.status(400).json({ msg: 'Please provide all fields' });

      const user = users.find(u => u.email === email);
      if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

      const payload = { user: { id: user.id } };
      const token = jwt.sign(payload, process.env.JWT_SECRET || 'safe-secret', { expiresIn: '7d' });

      res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });

  return router;
};

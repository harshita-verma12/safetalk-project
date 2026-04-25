const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Allow all origins for deployment (Render)
app.use(cors({
  origin: true, // Allow all origins in production
  credentials: true
}));

app.use(express.json());
// In-memory storage for demo
let users = [];
let journals = [];
let stories = [];

const authRoutes = require('./routes/auth')(users);
const communityRoutes = require('./routes/community')(stories);
const profileRoutes = require('./routes/profile')(journals);
const aiRoutes = require('./routes/ai');

app.use('/api/auth', authRoutes);
app.use('/api/community', communityRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/ai', aiRoutes);

app.get('/api/health', (req, res) => res.json({ status: 'OK', app: 'safetalk backend' }));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { checkUserRole } = require('./controllers/rolController');

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint from verify user role
app.post('/check-role', async (req, res) => {
    const { userIdOrUsername } = req.body;
    try {
        const rol = await checkUserRole(userIdOrUsername);
        if (rol === null) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ rol });
    } catch (err) {
        res.status(500).json({ error: 'Error from server' });
    }
});

const PORT = process.env.PORT || 5032;
app.listen(PORT, () => {
    console.log(`Auth-rol service running on port ${PORT}`);
});

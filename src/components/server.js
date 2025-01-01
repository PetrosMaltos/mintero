const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Register or update user
app.post('/api/user', async (req, res) => {
  const { telegramId, username } = req.body;
  try {
    let user = await prisma.user.findUnique({ where: { telegramId } });
    if (!user) {
      user = await prisma.user.create({
        data: { telegramId, username, tokens: 0, level: 1 },
      });
    } else {
      user = await prisma.user.update({
        where: { telegramId },
        data: { username },
      });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
});

// Get user data
app.get('/api/user/:telegramId', async (req, res) => {
  const { telegramId } = req.params;
  try {
    const user = await prisma.user.findUnique({ where: { telegramId: parseInt(telegramId) } });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
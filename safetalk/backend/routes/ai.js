const express = require('express');
const router = express.Router();

router.post('/assistant', (req, res) => {
  const { message } = req.body;
  // placeholder simple rule-based assistant
  let reply = 'Thanks for sharing. Keep breathing, and remember you are strong.';

  if (message) {
    const lower = message.toLowerCase();
    if (lower.includes('anxious') || lower.includes('anxiety')) {
      reply = 'If you feel anxious, try 4-7-8 breathing and grounding by naming 5 things you can see.';
    } else if (lower.includes('sad') || lower.includes('depressed')) {
      reply = 'It is okay to feel sad. Reach out to a friend or write your feelings in your daily journal.';
    } else if (lower.includes('angry')) {
      reply = 'Try expressing anger with movement like a short walk, and note what triggered it.';
    }
  }

  res.json({ response: reply });
});

module.exports = router;

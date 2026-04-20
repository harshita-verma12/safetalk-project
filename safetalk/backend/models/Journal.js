const newEntry = new Journal({
  userId: req.user.id, // Taken directly from your middleware!
  entry: req.body.entry,
  mood: req.body.mood
});
await newEntry.save();
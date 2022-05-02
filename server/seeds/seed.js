const db = require('../config/connection');
const { Post } = require('../models');

const postData = require('./postData.json');

db.once('open', async () => {
  await Post.deleteMany({});

  const postSeeds = await Post.insertMany(postData);

  console.log('Posts seeded!');
  process.exit(0);
});

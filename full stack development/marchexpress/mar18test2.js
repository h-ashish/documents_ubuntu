const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/post', async (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({
      status: 'error',
      message: 'Missing required fields: title or author'
    });
  }

  try {
    const post = await db.post.insert({ title, author });
    res.json(post);
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Internal Server Error'
    });
  }
});

app.listen(port, () =>
  console.log(`app is listening at http://localhost:${port}`)
);
import express from 'express';
import { createUrl, getUrlFromShort } from './shortUrlManager';
import path from 'path';
import bodyparser from 'body-parser';

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use(
  express.static(path.join(__dirname, '../../short-url-ui/.next/server'))
);
app.use(
  '/_next',
  express.static(path.join(__dirname, '../../short-url-ui/.next'))
);
app.use(bodyparser.json());

app.get('/go/:id', async (req, res) => {
  const { id } = req.params;
  const url = await getUrlFromShort(id);
  if (url) {
    res.redirect(url);
  } else {
    res.sendFile(
      path.join(
        __dirname,
        '../../short-url-ui/.next/server/app/url/create.html'
      )
    );
  }
});

app.post('/api/createUrl', async (req, res) => {
  const { text, url } = req.body;
  await createUrl(text, url);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server started at localhost:${PORT}`);
});

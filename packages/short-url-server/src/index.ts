import express from 'express';
import { getUrlFromShort } from './shortUrlManager';
import path from 'path';

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use(
  express.static(path.join(__dirname, '../../short-url-ui/.next/server'))
);

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

app.listen(PORT, () => {
  console.log(`Server started at localhost:${PORT}`);
});

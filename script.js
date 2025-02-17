import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3010;

const flowers = [
  { name: 'Rózsa', category: 'évelő' },
  { name: 'Tulipán', category: 'egyéves' },
  { name: 'Orchidea', category: 'szobanövény' }
];

const trees = [
  { name: 'Tölgy', category: 'lombhullatú' },
  { name: 'Fenyő', category: 'örökzöld' }
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', (req, res) => {
  res.send('<h1>Üdvözöljük a növények oldalán!</h1>');
});

app.get('/flowers', (req, res) => {
  res.json(flowers);
});

app.get('/trees', (req, res) => {
  res.json(trees);
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
/* eslint-env node */
import express from 'express';
import cors from 'cors';
import { readFile } from 'node:fs/promises';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const getDb = async () => JSON.parse(await readFile(new URL('./db.json', import.meta.url), 'utf-8'));

// Универсальный роут для получения любых данных (categories, products, works, advantages, about, production)
app.get('/api/:section', async (req, res) => {
  const db = await getDb();
  const data = db[req.params.section];
  if (!data) return res.status(404).json({ message: 'Not found' });
  res.json(data);
});

app.post('/api/callback', (req, res) => {
  console.log('Новая заявка:', req.body);
  res.json({ success: true, message: 'Мы вам перезвоним!' });
});

app.listen(PORT, () => console.log(`Backend started: http://localhost:${PORT}`));

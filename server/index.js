import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', async (req, res) => {
  res.send('Hello from DALL·E');
});

const DB = process.env.MONGODB_URL.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
const PORT = process.env.PORT || 8080;

const startServer = async () => {
  try {
    connectDB(DB);
    app.listen(PORT, () =>
      console.log('Server has started on http://localhost:8080')
    );
  } catch (err) {
    console.log(err);
  }
};

startServer();

import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

const app: express.Application = express();
const port = process.env.PORT || 3000;

dotenv.config();

app.use(express.json());

app.listen(port, () => {
  console.log('start')
})
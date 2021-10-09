import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import MapRouter from './Map/MapRouter'

const app: express.Application = express();
const port = process.env.PORT || 3000;

dotenv.config();

app.use(express.json());
app.use('/map',MapRouter);


app.listen(port, () => {
  console.log('start')
})
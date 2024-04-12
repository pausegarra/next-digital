import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './infrastructure/persistance/db';


const app = express();
const port = 3000;

async function bootstrap() {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

bootstrap().catch(err => {
  console.error('Failed to bootstrap the application:', err);
});
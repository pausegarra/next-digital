import 'reflect-metadata';
import './container';
import express from 'express';
import { db } from './infrastructure/persistance/db';
import { containerInit } from './container';

const app = express();
const port = 3000;

async function bootstrap() {
  await db.init();
  containerInit();

  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

bootstrap().catch(err => {
  console.error('Failed to bootstrap the application:', err);
});
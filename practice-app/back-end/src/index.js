import express from 'express';
import bodyParser from 'body-parser';
import indexRoute from './api';
import config from './config';
import { connectDatabase } from './database';

// Create app instance
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Load API routes
app.use(config.api.prefix, indexRoute);

connectDatabase();

// Start Server
const { port } = config;
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

export default app;

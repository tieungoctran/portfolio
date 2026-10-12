import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

export const createApp = (): Application => {
  const app = express();

  // Bảo mật HTTP Headers với Helmet
  app.use(helmet());

  // CORS cho phép Frontend truy cập
  const corsOrigin = process.env.CORS_ORIGIN || '*';
  app.use(cors({ origin: corsOrigin }));

  // Logging request HTTP
  if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('combined'));
  }

  // Parse JSON body
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Root health check endpoint
  app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
  });

  // API prefix
  app.use('/api/v1', apiRoutes);

  // 404 handler
  app.use((_req, res) => {
    res.status(404).json({
      success: false,
      error: {
        message: 'Endpoint không tồn tại (Route Not Found)',
        status: 404,
      },
    });
  });

  // Global Error Handler
  app.use(errorHandler);

  return app;
};

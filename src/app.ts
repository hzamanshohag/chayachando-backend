import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { StatusCodes } from 'http-status-codes';
import userRouter from './features/user/user.routes';
import articleRouter from './features/article/article.router';
import authRouter from './features/auth/auth.route';
import errorHandler from './middlewares/errorHandler';
import profileRouter from './features/profile/profile.router';
import heroRouter from './features/hero/hero.router';
import highlightRouter from './features/highlight/highlight.router';

const app = express();

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send({
    status: StatusCodes.OK,
    message: 'BD-News Server Running 👌❎',
  });
});
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/article', articleRouter);
app.use('/api/profile', profileRouter);
app.use('/api/hero', heroRouter);
app.use('/api/highlight', highlightRouter);

// Global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  errorHandler(err, req, res, next);
});

// Handle 404 errors
app.use('*', (req: Request, res: Response) => {
  res.status(StatusCodes.NOT_FOUND).json({ success: false, message: 'Route not found' });
});

app.use('*', (req: Request, res: Response) => {
  res.status(StatusCodes.NOT_FOUND).json({ success: false, message: 'Route not found' });
});

export default app;

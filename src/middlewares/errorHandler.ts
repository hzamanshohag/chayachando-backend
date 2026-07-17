import { ZodError } from 'zod';
import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: err.errors.map((e) => ({ field: e.path, message: e.message })),
    });
  }

  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
};

export default errorHandler;

import type { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  console.log("System Error:", err.message || err);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message: message,
  });
};

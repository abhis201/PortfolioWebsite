import 'dotenv/config';
import express from 'express';
import { type Request, Response, NextFunction } from "express";
import { registerRoutes } from '../server/routes';

// Initialize Express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup middleware for logging
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      console.log(logLine);
    }
  });

  next();
});

// Register routes once
let routesPromise: Promise<any> | null = null;
function getRoutes() {
  if (!routesPromise) {
    routesPromise = registerRoutes(app);
  }
  return routesPromise;
}

// Error handler middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

// Vercel serverless handler
export default async function handler(req: Request, res: Response) {
  await getRoutes();
  
  return new Promise((resolve) => {
    app(req, res, (err) => {
      if (err) {
        console.error(err);
        res.status(500).end('Internal Server Error');
        return resolve(undefined);
      }
      resolve(undefined);
    });
  });
}
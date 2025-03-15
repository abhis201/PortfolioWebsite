import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import nodemailer from "nodemailer";
import { getAllPosts, getPostBySlug } from "../client/src/lib/mdx";

export async function registerRoutes(app: Express): Promise<Server> {
  // Existing contact route
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertMessageSchema.parse(req.body);
      const message = await storage.createMessage(data);

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: "sing1290@purdue.edu",
        subject: `New Contact Form Message from ${data.name}`,
        text: `
          Name: ${data.name}
          Email: ${data.email}
          Message: ${data.message}
        `,
      });

      res.json(message);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid input data" });
      } else {
        console.error(error);
        res.status(500).json({ message: "Failed to send message" });
      }
    }
  });

  // Blog routes
  app.get("/api/posts", async (_req, res) => {
    try {
      console.log('Fetching all blog posts');
      const posts = await getAllPosts();
      console.log('Found posts:', posts.length);
      res.json(posts);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/posts/:slug", async (req, res) => {
    try {
      console.log('Fetching blog post:', req.params.slug);
      const post = await getPostBySlug(req.params.slug);
      if (!post) {
        res.status(404).json({ message: "Blog post not found" });
        return;
      }
      res.json(post);
    } catch (error) {
      console.error('Error fetching blog post:', error);
      res.status(500).json({ message: "Failed to fetch blog post" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
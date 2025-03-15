// server/index.ts
import express from "express";
import path2 from "path";
import { fileURLToPath } from "url";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  users;
  messages;
  currentId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.messages = /* @__PURE__ */ new Map();
    this.currentId = 1;
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.currentId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async createMessage(insertMessage) {
    const id = this.currentId++;
    const message = { ...insertMessage, id };
    this.messages.set(id, message);
    return message;
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  message: text("message").notNull()
});
var insertMessageSchema = createInsertSchema(messages).pick({
  name: true,
  email: true,
  message: true
});

// server/routes.ts
import { ZodError } from "zod";
import nodemailer from "nodemailer";

// client/src/lib/mdx.ts
import fs from "fs";
import path from "path";
var BLOG_PATH = path.join(process.cwd(), "client/content/blog");
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = frontmatterRegex.exec(content);
  if (!match) {
    return {
      frontmatter: {},
      content
    };
  }
  const frontmatter = match[1].split("\n").reduce((acc, curr) => {
    const [key, ...value] = curr.split(":");
    if (key && value) {
      acc[key.trim()] = value.join(":").trim().replace(/^"(.*)"$/, "$1");
    }
    return acc;
  }, {});
  const contentWithoutFrontmatter = content.replace(frontmatterRegex, "").trim();
  return {
    frontmatter,
    content: contentWithoutFrontmatter
  };
}
async function getAllPosts() {
  try {
    console.log("Reading blog posts from:", BLOG_PATH);
    const files = fs.readdirSync(BLOG_PATH);
    console.log("Found files:", files);
    const posts = files.filter((file) => file.endsWith(".mdx") || file.endsWith(".md")).map((file) => {
      try {
        const filePath = path.join(BLOG_PATH, file);
        console.log("Processing file:", filePath);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { frontmatter, content } = parseFrontmatter(fileContents);
        console.log("Parsed frontmatter:", frontmatter);
        return {
          slug: file.replace(/\.mdx?$/, ""),
          frontmatter,
          content
          // We'll add markdown parsing once we can install the dependency
        };
      } catch (error) {
        console.error(`Error processing file ${file}:`, error);
        return null;
      }
    }).filter((post) => post !== null).sort((a, b) => {
      return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
    });
    return posts;
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}
async function getPostBySlug(slug) {
  try {
    const filePath = path.join(BLOG_PATH, `${slug}.mdx`);
    console.log("Reading blog post:", filePath);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { frontmatter, content } = parseFrontmatter(fileContents);
    return {
      slug,
      frontmatter,
      content
      // We'll add markdown parsing once we can install the dependency
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

// server/routes.ts
async function registerRoutes(app2) {
  app2.post("/api/contact", async (req, res) => {
    try {
      const data = insertMessageSchema.parse(req.body);
      const message = await storage.createMessage(data);
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });
      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: "sing1290@purdue.edu",
        subject: `New Contact Form Message from ${data.name}`,
        text: `
          Name: ${data.name}
          Email: ${data.email}
          Message: ${data.message}
        `
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
  app2.get("/api/posts", async (_req, res) => {
    try {
      console.log("Fetching all blog posts");
      const posts = await getAllPosts();
      console.log("Found posts:", posts.length);
      res.json(posts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });
  app2.get("/api/posts/:slug", async (req, res) => {
    try {
      console.log("Fetching blog post:", req.params.slug);
      const post = await getPostBySlug(req.params.slug);
      if (!post) {
        res.status(404).json({ message: "Blog post not found" });
        return;
      }
      res.json(post);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({ message: "Failed to fetch blog post" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/index.ts
var __filename = fileURLToPath(import.meta.url);
var __dirname = path2.dirname(__filename);
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      console.log(logLine);
    }
  });
  next();
});
(async () => {
  await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (process.env.NODE_ENV === "production") {
    const publicPath = path2.join(__dirname, "public");
    console.log(`Serving static files from: ${publicPath}`);
    app.use(express.static(publicPath));
    app.get("*", (req, res) => {
      res.sendFile(path2.join(publicPath, "index.html"));
    });
  }
  const port = process.env.PORT || 3e3;
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
})();

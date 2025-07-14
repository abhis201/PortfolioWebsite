import { pgTable, text, serial, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 100 }).notNull().unique(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  message: text("message").notNull(),
});

export const blogs = pgTable("blogs", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  content: text("content").notNull(),
  excerpt: text("excerpt"),
  featuredImage: text("featured_image"),
  author: varchar("author", { length: 100 }).notNull(),
  publishedAt: timestamp("published_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  tags: text("tags").array(),
  isPublished: text("is_published").default("true"),
});

export const blogMedia = pgTable("blog_media", {
  id: serial("id").primaryKey(),
  blogId: serial("blog_id").references(() => blogs.id, { onDelete: "cascade" }),
  mediaUrl: text("media_url").notNull(),
  mediaType: varchar("media_type", { length: 50 }).notNull(), // image, video, file
  caption: text("caption"),
  order: serial("order").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users);
export const insertMessageSchema = createInsertSchema(messages).pick({
  name: true,
  email: true,  
  message: true
});
export const insertBlogSchema = createInsertSchema(blogs).pick({
  title: true,
  slug: true,
  content: true,
  excerpt: true,
  featuredImage: true,
  author: true,
  tags: true,
  isPublished: true,
});
export const insertBlogMediaSchema = createInsertSchema(blogMedia).pick({
  blogId: true,
  mediaUrl: true,
  mediaType: true,
  caption: true,
  order: true,
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type Message = typeof messages.$inferSelect;
export type Blog = typeof blogs.$inferSelect;
export type InsertBlog = z.infer<typeof insertBlogSchema>;
export type BlogMedia = typeof blogMedia.$inferSelect;
export type InsertBlogMedia = z.infer<typeof insertBlogMediaSchema>;
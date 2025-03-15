import { pgTable, text, serial, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Add the missing users table definition
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 100 }).notNull().unique(),
  password: text("password").notNull(),
  // Add any other fields your User type needs
});

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  message: text("message").notNull(),
});

// Create the user schema
export const insertUserSchema = createInsertSchema(users);

export const insertMessageSchema = createInsertSchema(messages).pick({
  name: true,
  email: true,  
  message: true
});

// Add the missing types
export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type Message = typeof messages.$inferSelect;
import {
  pgTable,
  serial,
  varchar,
} from "drizzle-orm/pg-core";

export const testUsers = pgTable("test_users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
});

export const TestUser = typeof testUsers.$inferSelect;
export const TestUserInsert = typeof testUsers.$inferInsert;
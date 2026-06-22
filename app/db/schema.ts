import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable ("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    job: varchar().notNull(),
    assignee: varchar().notNull(),
    priority: varchar().notNull(),
    status: varchar().notNull(),
}); 


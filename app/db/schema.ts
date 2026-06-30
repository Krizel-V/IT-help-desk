import { timestamp } from "drizzle-orm/pg-core";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const userTable = pgTable ("user", {
    user_id: integer().primaryKey().generatedAlwaysAsIdentity(),
    pass: varchar().notNull(),
    role: varchar().notNull(),
    fullName: varchar().notNull(),
    email: varchar().notNull(),
    cn: varchar().notNull(),
}); 

export const jobQueue = pgTable ("jobQueue", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    job: varchar().notNull(),
    assignee: varchar().notNull(),
    priority: varchar().notNull(),
    status: varchar().notNull(),
    dateCreated: timestamp('dateCreated').defaultNow().notNull(),
}); 

export const history = pgTable("history", {
    history_id: integer('history_id').references(() => jobQueue.id),
    finishDate: timestamp('finishDate').defaultNow().notNull(),
})


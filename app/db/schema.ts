import { timestamp } from "drizzle-orm/pg-core";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable ("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    job: varchar().notNull(),
    assignee: varchar().notNull(),
    priority: varchar().notNull(),
    status: varchar().notNull(),
    dateCreated: timestamp('dateCreated').defaultNow().notNull(),
}); 

export const history = pgTable("history", {
    history_id: integer('history_id').references(() => usersTable.id),
    finishDate: timestamp('finishDate').defaultNow().notNull(),
})


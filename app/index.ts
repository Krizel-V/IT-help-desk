import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import { usersTable } from './db/schema';
  
const db = drizzle(process.env.DATABASE_URL!);

export async function main() {
    const user: typeof usersTable.$inferInsert = {
        job: 'Format',
        assignee: 'Viray',
        priority: 'Low',
        status: 'Pending',
    };

    await db.insert(usersTable).values(user);
    console.log('New user created')

    const users = await db.select().from(usersTable);
    console.log('Getting all users from the database: ', users)
}

main();

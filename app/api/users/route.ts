import { NextResponse } from 'next/server';
import { usersTable } from '@/app/db/schema';
import { drizzle } from 'drizzle-orm/neon-http';

export async function GET() {
    const db = drizzle(process.env.DATABASE_URL!);
    const users = await db.select().from(usersTable);
    return NextResponse.json(users)
}

// export async function POST() {
//     const db = drizzle(process.env.DATABASE_URL!);
 
//     // const users: typeof usersTable.$inferInsert = {
//     //     job: FormData.get("job") as string,
//     //     assignee: 'sd',
//     //     priority: 'john@example.com',
//     //     status: 'das'
//     // };

//     // await db.insert(usersTable).values(users);
//     // return NextResponse.json(users)
// }

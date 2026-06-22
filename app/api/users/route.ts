import { NextResponse } from 'next/server';
import { usersTable } from '@/app/db/schema';
import { drizzle } from 'drizzle-orm/neon-http';
import { redirect } from 'next/navigation';

export async function GET() {
    const db = drizzle(process.env.DATABASE_URL!);
    const users = await db.select().from(usersTable);
    return NextResponse.json(users)
}

export async function POST(request: Request) {
    const db = drizzle(process.env.DATABASE_URL!);
    const body = await request.json();

    const users: typeof usersTable.$inferInsert = {
        job: body.job ?? '',
        assignee: body.assignee ?? '',
        priority: body.priority ?? '',
        status: body.status ?? '',
    };

    await db.insert(usersTable).values(users);

    return new Response(JSON.stringify(users), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
        
    });
}

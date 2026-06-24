import { NextResponse } from 'next/server';
import { usersTable } from '@/app/db/schema';
import { drizzle } from 'drizzle-orm/neon-http';
import { eq, ne } from 'drizzle-orm';

export async function GET() {
    const db = drizzle(process.env.DATABASE_URL!);
    const users = await db.select().from(usersTable).where(ne(usersTable.status, 'Completed'));
    return NextResponse.json(users)
}

export async function POST(request: Request) {
    const db = drizzle(process.env.DATABASE_URL!);
    const { job = '', assignee = '', priority = '', status = '' } = await request.json();

    const user: typeof usersTable.$inferInsert = { job, assignee, priority, status };
    await db.insert(usersTable).values(user);

    return Response.json(user, { status: 201 });
}

export async function PATCH(req: Request) {
    const db = drizzle(process.env.DATABASE_URL!);
    const { id, status } = await req.json();

    await db
        .update(usersTable)
        .set({ status })
        .where(eq(usersTable.id, id));

    return Response.json({ success: true });
}
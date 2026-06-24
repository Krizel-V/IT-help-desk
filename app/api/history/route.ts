import { NextResponse } from 'next/server';
import { history, usersTable } from '@/app/db/schema';
import { drizzle } from 'drizzle-orm/neon-http';
import { eq } from 'drizzle-orm';

export async function GET() {
    const db = drizzle(process.env.DATABASE_URL!);
    const h = await db.select()
        .from(usersTable)
        .where(eq(usersTable.status, 'Completed'))
        .leftJoin(history, eq(usersTable.id, history.history_id));
        
    return NextResponse.json(h)
}

export async function POST(request: Request) {
    const db = drizzle(process.env.DATABASE_URL!);
    const { history_id = ''} = await request.json();

    const h: typeof history.$inferInsert = { history_id};
    await db.insert(history).values(h);

    return Response.json(h, { status: 201 });
}

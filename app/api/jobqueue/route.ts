import { NextResponse } from 'next/server';
import { jobQueue } from '@/app/db/schema';
import { drizzle } from 'drizzle-orm/neon-http';
import { eq, ne } from 'drizzle-orm';

export async function GET() {
    const db = drizzle(process.env.DATABASE_URL!);
    const users = await db.select().from(jobQueue).where(ne(jobQueue.status, 'Completed'));
    return NextResponse.json(users)
}

export async function POST(request: Request) {
    const db = drizzle(process.env.DATABASE_URL!);
    const { job = '', assignee = '', priority = '', status = '' } = await request.json();

    const user: typeof jobQueue.$inferInsert = { job, assignee, priority, status };
    await db.insert(jobQueue).values(user);

    return Response.json(user, { status: 201 });
}

export async function PATCH(req: Request) {
    const db = drizzle(process.env.DATABASE_URL!);
    const { id, ...fieldsToUpdate } = await req.json();

    await db
        .update(jobQueue)
        .set(fieldsToUpdate)
        .where(eq(jobQueue.id, id));

    return Response.json({ success: true });
}
import { NextResponse } from 'next/server';
import { history, jobQueue } from '@/app/db/schema';
import { drizzle } from 'drizzle-orm/neon-http';
import { eq } from 'drizzle-orm';

const db = drizzle(process.env.DATABASE_URL!);

export async function GET() {
    const h = await db.select()
        .from(jobQueue)
        .where(eq(jobQueue.status, 'Completed'))
        .leftJoin(history, eq(jobQueue.id, history.history_id));
        
    return NextResponse.json(h)
}

export async function POST(request: Request) {
    const { history_id = ''} = await request.json();

    const h: typeof history.$inferInsert = { history_id };
    await db.insert(history).values(h);

    return Response.json(h, { status: 201 });
}

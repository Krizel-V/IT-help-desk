import { columns, Queue } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Queue[]> {
    const res = await fetch("http://localhost:3000/api/history", {
        cache: "no-store",
    });

    if (!res.ok) {
        const text = await res.text();
        console.error(text);
        throw new Error(`API Error: ${res.status}`);
    }

    return res.json();
}

export default async function HistoryPage() {
    const data = await getData()

    return (
        <div className="container mx-auto">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
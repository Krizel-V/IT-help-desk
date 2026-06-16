import { columns, Queue } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Queue[]> {
    return [
        {
            id: 1,
            job: "Replace thermal paste",
            assignee: "Anna Reyes",
            priority: "High",
            status: "pending",
            created: "January 12, 2026"
        }
    ]
}

export default async function JobQueuePage() {
    const data = await getData()

    return (
        <div className="container mx-auto py-5">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
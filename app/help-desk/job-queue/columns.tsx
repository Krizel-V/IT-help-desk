"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Queue = {
    id: number
    job: string
    assignee: string
    priority: string
    status: "pending" | "processing" | "success" | "failed"
    created: string
}

export const columns: ColumnDef<Queue>[] = [
    {
        accessorKey: "job",
        header: "Job",
    },
    {
        accessorKey: "assignee",
        header: "Assignee",
    },
    {
        accessorKey: "priority",
        header: "Priority",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "created",
        header: "Date Created",
    },
    {
        accessorKey: "created",
        header: "Date Created",
    },
]
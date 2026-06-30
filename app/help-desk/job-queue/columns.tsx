"use client";

import PostDate from '@/components/date';
import { ColumnDef } from "@tanstack/react-table";

import View from "./queue-actions/view-details";

export type Queue = {
    id: number
    job: string
    assignee: string
    priority: "High" | "Medium" | "Low"
    status: "In Progress" | "Open" | "On Hold"
    dateCreated: string
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
        accessorKey: "dateCreated",
        header: "Date Created",
        cell: ({ row }) => {
            const dateValue = row.original.dateCreated;
            return <PostDate dateString={dateValue} />;
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const queue = row.original

            return (
                <View queue={queue} />
            )
        },
    },
]
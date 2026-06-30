"use client";

import { ColumnDef } from "@tanstack/react-table";
import PostDate from '@/components/date';

export type Queue = {
    job: string
    history_id: number
    history: {
        finishDate: string
    }
    // assignee: string
    // priority: "High" | "Medium" | "Low"
    // status: "In Progress" | "Open" | "On Hold"
    // created: string
}

export const columns: ColumnDef<Queue>[] = [
    {
        accessorKey: "jobQueue.job",
        header: "Job",
    },
    {
        accessorKey: "jobQueue.assignee",
        header: "Assignee",
    },
    {
        accessorKey: "jobQueue.priority",
        header: "Priority",
    },
    {
        accessorKey: "jobQueue.status",
        header: "Status",
    },
    // {
    //     accessorKey: "jobQueue.created",
    //     header: "Date Created",
    // },
    {
        accessorKey: "history.finishDate",
        header: "Date Completed",
        cell: ({ row }) => {
            const dateValue = row.original.history?.finishDate;
            return <PostDate dateString={dateValue} />;
        },
    },
]
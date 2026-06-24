"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
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
        accessorKey: "users.job",
        header: "Job",
    },
    {
        accessorKey: "users.assignee",
        header: "Assignee",
    },
    {
        accessorKey: "users.priority",
        header: "Priority",
    },
    {
        accessorKey: "users.status",
        header: "Status",
    },
    // {
    //     accessorKey: "users.created",
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
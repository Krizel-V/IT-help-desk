"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import EditQueue from "./queue-actions/edit";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type Queue = {
    id: number
    job: string
    assignee: string
    priority: "High" | "Medium" | "Low"
    status: "In Progress" | "Open" | "On Hold" 
    // created: string
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
    // {
    //     accessorKey: "created",
    //     header: "Date Created",
    // },
    {
        id: "actions",
        cell: ({ row }) => {
            const queue = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">...</Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="border p-2">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                            <EditQueue queue={queue}/>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Mark as Completed</DropdownMenuItem>
                        <DropdownMenuItem>Cancel</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
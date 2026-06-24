import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { IconCircleCheck } from "@tabler/icons-react";
import { Queue } from "../columns";
import { useRouter } from "next/navigation";

export default function MarkCompleted({ queue }: { queue: Queue }) {

    const router = useRouter();
    const handleEdit = async () => {
        try {
            //Change status to "Completed"
            const response = await fetch("/api/users", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: queue.id,
                    status: "Completed",
                }),
            });

            const data = await response.json();

            if (response.ok) {

                //Insert to history table
                const res = await fetch("/api/history", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        history_id: queue.id,
                        finishDate: new Date().toString(),
                    }),
                });

            }
        } catch (err) {
            console.error(err);
        }
        router.refresh();
        router.push("/help-desk/job-queue");
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger className="text-green-700 hover:scale-105">
                <IconCircleCheck />
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This will mark this queue item as completed.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleEdit}>
                        Mark as Completed
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
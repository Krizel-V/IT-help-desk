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
import { toast } from "sonner"
import { Button } from "@/components/ui/button";

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
                toast.success("Successfully marked as completed!");
            }
        } catch (err) {
            console.error(err);
        }
        router.refresh();
        router.push("/help-desk/job-queue");
    };

    return (
        <AlertDialog>
            <Button variant="outline" className="hover:bg-green-800 hover:text-white" asChild>
                <AlertDialogTrigger className="w-full bg-green-700 text-white border border-green-700">
                    Mark as Completed
                </AlertDialogTrigger>
            </Button>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This will mark this queue item as completed.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => { handleEdit() }}>
                        Mark as Completed
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
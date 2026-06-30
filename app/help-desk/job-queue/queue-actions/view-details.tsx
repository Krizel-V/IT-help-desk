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

import {
    Field,
    FieldGroup,
    FieldDescription,
    FieldLabel,
} from "@/components/ui/field"

import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IconEye } from "@tabler/icons-react";
import { IconEdit } from "@tabler/icons-react";

import { Queue } from "../columns";
import MarkCompleted from "./mark-completed";
import PostDate from "@/components/date";
import { format } from 'date-fns';

export default function View({ queue }: { queue: Queue }) {

    const [disable, setD] = useState(true);
    
    const formattedDate = queue.dateCreated ? format(new Date(queue.dateCreated), 'LLLL d, yyyy') : '—';
    const fieldData = [
        { fLabel: "Job", fId: "job", fName: "job", fValue: queue.job },
        { fLabel: "Assignee", fId: "assignee", fName: "assignee", fValue: queue.assignee },
        { fLabel: "Priority", fId: "priority", fName: "priority", fValue: queue.priority },
        { fLabel: "Status", fId: "status", fName: "status", fValue: queue.status },
        { fLabel: "Date Created", fId: "date", fName: "date", fValue: formattedDate },
    ];

    const formId = `edit-job-form-${queue.id}`;
    const router = useRouter();

    const handleEdit = async (formData: FormData) => {

        console.log("Job: " + formData.get('job'));
        console.log("Assignee: " + formData.get('assignee'));

        try {
            const response = await fetch("/api/users", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: queue.id,
                    job: formData.get('job'),
                    assignee:  formData.get('assignee'),
                    priority: formData.get('priority'),
                }),
            });
        }
        catch (err) {
            console.error(err);
        }
        router.refresh();
        router.push("/help-desk/job-queue");
    }

    return (
        <AlertDialog>
            <Button variant="outline" asChild>
                <AlertDialogTrigger className=" hover:scale-105">
                    <IconEye />
                </AlertDialogTrigger>
            </Button>
            <form id={formId} action={handleEdit}>
                <AlertDialogContent>
                    <AlertDialogHeader className="flex">
                        <div>
                            <AlertDialogTitle>Job Details</AlertDialogTitle>
                            <AlertDialogDescription>
                                This will mark this queue item as completed.
                            </AlertDialogDescription>
                        </div>
                        <div className="ml-auto h-full content-center cursor-pointer">
                            <div onClick={() => setD(prev => !prev)}>
                                {disable ? <IconEdit /> : ""}
                            </div>
                        </div>
                    </AlertDialogHeader>
                    <div className="-mx-4 max-h-[50vh] overflow-y-auto px-4">
                        <FieldGroup className="py-4">
                            {fieldData.map((fData) =>
                                <Field data-disabled key={fData.fId}>
                                    <Label htmlFor={fData.fId}>{fData.fLabel}</Label>
                                    <Input id={fData.fId}
                                        name={fData.fName}
                                        defaultValue={fData.fValue}
                                        form={formId}
                                        readOnly={disable}
                                        className="disabled:opacity-100 disabled:bg-transparent disabled:border-0 disabled:border-b-1"
                                    />
                                </Field>
                            )}
                            <Field>
                                <FieldLabel htmlFor="textarea-message">Notes</FieldLabel>
                                <Textarea id="textarea-message" placeholder="Type your message here." />
                            </Field>
                        </FieldGroup>

                    </div>
                    <AlertDialogFooter>
                        <div className={clsx("flex flex-col gap-2", disable ? "" : "hidden")}>
                            <MarkCompleted queue={queue} />
                            <AlertDialogCancel className="w-full">Cancel</AlertDialogCancel>
                        </div>
                        <div className={clsx("flex flex-col gap-2", disable ? "hidden" : "")}>
                            <Button
                                onClick={() => setD(true)}
                                form={formId}
                                type="submit"
                                className="w-full">
                                Save Changes
                            </Button>
                            <Button variant="outline"
                                onClick={() => setD(true)}
                                className="w-full">
                                Cancel
                            </Button>
                        </div>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </form>
        </AlertDialog>
    );
}
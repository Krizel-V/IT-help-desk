import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function AddNew() {
    const [open, setOpen] = useState(false);
    const [priority, setPrio] = useState("");
    const router = useRouter();
    const formData = new FormData();
    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        const body = {
            ...Object.fromEntries(new FormData(e.currentTarget)), //use this to get all fields automatically
            // job: formData.get("job"),
            // assignee: formData.get("assignee"),
            priority,
            // status: formData.get("status"),
        };

        const res = await fetch("/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        toast.success("Successfully added!")
        
        if (!res.ok) return console.error(await res.text());

        setOpen(false);
        router.refresh();
        router.push("/help-desk/job-queue");
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <Button asChild>
                <DialogTrigger>+</DialogTrigger>
            </Button>
            <DialogContent className="sm:max-w-sm">
                <DialogHeader className="border-b pb-3">
                    <DialogTitle>Enter Job Details</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <FieldGroup className="pb-10">
                        <Field>
                            <Label htmlFor="job">Job</Label>
                            <Input id="job" name="job" defaultValue="" />
                        </Field>
                        <Field>
                            <Label htmlFor="assignee">Assignee</Label>
                            <Input id="assignee" name="assignee" defaultValue="" />
                        </Field>
                        <Field>
                            <Label htmlFor="priority">Priority</Label>

                            <Select value={priority} onValueChange={setPrio}>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Priority" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Priority</SelectLabel>
                                        <SelectItem value="High">High</SelectItem>
                                        <SelectItem value="Medium">Medium</SelectItem>
                                        <SelectItem value="Low">Low</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </Field>
                        <Field>
                            <Label htmlFor="stat">Status</Label>
                            <Input id="status" name="status" defaultValue="Open" />
                        </Field>
                    </FieldGroup>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button" variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Add </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
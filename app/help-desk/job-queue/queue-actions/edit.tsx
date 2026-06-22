import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
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
import { Queue } from "../columns"


export default function EditQueue({queue}:{queue:Queue}) {

    const [color, setColor] = useState(queue.priority.toString());
    const colors = {
        Low: "bg-green-100 text-green-800 border border-green-800",
        Medium: "bg-amber-100 text-amber-800 border border-amber-800",
        High: "bg-red-100 text-red-800 border border-red-800",
    }
    const prioType = color as keyof typeof colors;
    return (
        <Dialog>
            <form>
                <DialogTrigger>Edit</DialogTrigger>
                <DialogContent className="sm:max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Edit Job Details</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <FieldGroup>
                        <Field>
                            <Label htmlFor="job">Job</Label>
                            <Input id="job" name="name" defaultValue={queue.job} />
                        </Field>
                        <Field>
                            <Label htmlFor="assignee">Assignee</Label>
                            <Input id="assignee" name="username" defaultValue={queue.assignee} />
                        </Field>
                        <Field>
                            <Label htmlFor="prio">Priority</Label>
                            <Select defaultValue={queue.priority} onValueChange={(value) => setColor(value)}>
                                <SelectTrigger className={colors[prioType]}>
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
                            <Input id="stat" name="username" defaultValue={queue.status} />
                        </Field>
                    </FieldGroup>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    );
}
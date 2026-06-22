'use client';

import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactModal() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 min-w-20">
        <Card className="py-5">
            <CardHeader>
                <CardTitle>Project Overview</CardTitle>
                <CardDescription>
                Track progress and recent activity for your Next.js app.
                </CardDescription>
            </CardHeader>
            <CardContent>
                Your design system is ready. Start building your next component.
            </CardContent>
            <CardFooter>
                <Button variant="outline"
                    onClick={() => router.back()}>
                    Close
                </Button>
            </CardFooter>
        </Card>
    </div>
  );
}

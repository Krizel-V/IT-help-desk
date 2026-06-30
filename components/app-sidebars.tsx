'use client';

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button";
import { NavLinks } from "@/components/nav-links";
import { IconDeviceDesktop } from "@tabler/icons-react";

import Link from 'next/link';
export function UiSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <h1 className="flex justify-center gap-3 text-lg font-semibold border-b-1 border-[#737679] text-center"><IconDeviceDesktop /> ITDesk Pro</h1>
            </SidebarHeader>
            <SidebarContent>
                <NavLinks />
            </SidebarContent>
            <SidebarFooter>
                <Button variant="outline" className="text-black">
                    <Link href="http://localhost:3000/">
                        Log out
                    </Link>
                </Button>
            </SidebarFooter>
        </Sidebar>
    )
}
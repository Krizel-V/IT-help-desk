'use client';

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { NavLinks } from "@/components/nav-links";

export function UiSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <h1 className="text-lg font-semibold border-b-1 text-center bg-grey-800">ITDesk Pro</h1>
            </SidebarHeader>
            <SidebarContent>
                <NavLinks />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}
import Link from "next/link";
import { SidebarGroup, SidebarGroupLabel, SidebarMenuButton } from "./ui/sidebar";
import { IconLayoutDashboard, IconList, IconHistory, IconDeviceDesktop } from '@tabler/icons-react';
import { usePathname } from 'next/navigation'
import { Button } from "./ui/button";

const links = [
    {
        navMain: [
            {
                title: "Overview",
                item: [
                    { title: "Dashboard", href: "/dashboard", icon: <IconLayoutDashboard /> },

                ],
            },
            {
                title: "IT Management",
                item: [
                    { title: "Inventory", href: "/dashboard/inventory", icon: <IconDeviceDesktop /> },
                    { title: "Job Queue", href: "/dashboard/job-queue", icon: <IconList /> },
                    { title: "History", href: "/dashboard/history", icon: <IconHistory /> },
                ],
            },
        ]
    }
];

export function NavLinks() {
    const pathname = usePathname();
    
    return (
        <>
            {links[0].navMain.map((navItem) => {
                return (
                    <div key={navItem.title}>
                        <SidebarGroupLabel>{navItem.title}</SidebarGroupLabel>
                        <SidebarGroup>
                            <div className="flex flex-col gap-4">
                                {navItem.item.map((link) => {
                                    return (
                                        // <Button asChild key={link.title} variant={pathname === link.href ? "default" : "secondary"}></Button>
                                        <SidebarMenuButton asChild key={link.title} className={pathname === link.href ? "text-gray-700" : "bg-blue-50 text-blue-700"}>
                                            <Link href={link.href} className="flex gap-2 text-gray-700">
                                                {link.icon}
                                                {link.title}
                                            </Link>
                                        </SidebarMenuButton>
                                    );
                                }
                                )}
                            </div>
                        </SidebarGroup>
                    </div>
                );
            })}
        </>
    )
}
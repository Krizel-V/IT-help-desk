import Link from "next/link";
import { SidebarGroup, SidebarGroupLabel, SidebarMenuButton } from "./ui/sidebar";
import { IconLayoutDashboard, IconList, IconHistory, IconDeviceDesktop } from '@tabler/icons-react';
import { usePathname } from 'next/navigation'

const links = [
    {
        navMain: [
            {
                title: "Overview",
                item: [
                    { title: "Dashboard", href: "/help-desk/dashboard", icon: <IconLayoutDashboard /> },

                ],
            },
            {
                title: "IT Management",
                item: [
                    { title: "Inventory", href: "/help-desk/inventory", icon: <IconDeviceDesktop /> },
                    { title: "Job Queue", href: "/help-desk/job-queue", icon: <IconList /> },
                    { title: "History", href: "/help-desk/history", icon: <IconHistory /> },
                ],
            },
        ]
    }
];

export function NavLinks() {
    const pathname = usePathname();
    const isActive = "border-l-2 border-solid border-blue-500 bg-blue-50 text-indigo-500"

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
                                        <SidebarMenuButton asChild key={link.title} className={pathname === link.href ? isActive : ""}>
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
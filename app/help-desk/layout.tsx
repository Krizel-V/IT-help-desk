import { UiSidebar } from '@/components/app-sidebars';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export default function AppSidebar({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <UiSidebar />
      <main className="flex flex-col w-full h-full">
        <SidebarTrigger />
        <div className="flex border-t-1 w-full h-full p-5">
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}


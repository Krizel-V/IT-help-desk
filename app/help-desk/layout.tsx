import { UiSidebar } from '@/components/app-sidebars';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Toaster } from "@/components/ui/sonner"

export default function AppSidebar({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <SidebarProvider>
      <UiSidebar />
      <main className="flex flex-col w-full h-full">
        <SidebarTrigger />
        <div className="flex border-t-1 w-full h-full p-5">
          {children}
          {modal}
        </div>
        <Toaster />
      </main>
    </SidebarProvider>
  )
}


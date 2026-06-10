import { UiSidebar } from '@/components/app-sidebars';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export default function AppSidebar({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <UiSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}


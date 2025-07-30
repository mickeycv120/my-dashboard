import { SidebarProvider, SidebarTrigger } from "@/components/shadcn/sidebar";
import Sidebar from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SidebarProvider>
        <Sidebar />

        <SidebarTrigger />
        <main className="flex-1">{children}</main>
      </SidebarProvider>
    </div>
  );
}

import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </div>
    </SidebarProvider>
  );
}

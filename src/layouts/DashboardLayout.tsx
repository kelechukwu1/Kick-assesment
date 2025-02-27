import { AppSidebar } from "@/components/partials/AppSidebar"
import SidebarTriggerButton from "@/components/partials/SidebarTriggerButton"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"

/**
 * DashboardLayout Component
 * 
 * Provides the main layout structure for the dashboard, including the sidebar and main content area.
 * The sidebar can be toggled between expanded and collapsed states, and the main content area
 * dynamically adjusts to accommodate the sidebar's width.
 * 
 * Uses the `SidebarProvider` to manage the sidebar's state and `Outlet` to render nested routes.
 * 
 * @returns {JSX.Element} - A layout component with a sidebar and a main content area.
 */
const DashboardLayout = () => {
    return (
        <SidebarProvider className="relative w-[100dvw]">
            <AppSidebar />
            <SidebarInset>
                <SidebarTriggerButton />
                <Outlet />
            </SidebarInset>
        </SidebarProvider >
    )
}

export default DashboardLayout
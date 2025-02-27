import { AppSidebar } from "@/components/partials/AppSidebar"
import SidebarTriggerButton from "@/components/partials/SidebarTriggerButton"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <SidebarTriggerButton />
                <Outlet />
            </SidebarInset>
        </SidebarProvider >
    )
}

export default DashboardLayout
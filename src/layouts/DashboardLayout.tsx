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

// import { AppSidebar } from "@/components/partials/AppSidebar"
// import SidebarTriggerButton from "@/components/partials/SidebarTriggerButton"
// import {
//     SidebarInset,
//     SidebarProvider,
// } from "@/components/ui/sidebar"

// export default function DashboardLayout({ children }: { children: React.ReactNode }) {
//     return (
//         <SidebarProvider className="flex overflow-hidden">
//             <AppSidebar />
//             {/* <SidebarTriggerButton /> */}
//             <SidebarInset>
//                 {children}
//             </SidebarInset>
//         </SidebarProvider>
//     )
// }

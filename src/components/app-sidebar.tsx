import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavMinor } from "@/components/nav-minor"
import { NavTrivia } from "@/components/nav-trivia"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { sidebarData } from "@/data"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <img src="/logo.png" alt="Kick logo" height={100} width={100} className="ml-3" />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarData.navMain} />
        <NavMinor items={sidebarData.NavMinor} />
      </SidebarContent>
      <SidebarFooter>
        <NavTrivia />
      </SidebarFooter>
    </Sidebar>
  )
}

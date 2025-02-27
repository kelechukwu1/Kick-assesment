import * as React from "react"

import { NavTrivia } from "@/components/partials/NavTrivia"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { sidebarData } from "@/data"
import Logo from "./Logo"
import NavMain from "./NavMain"
import NavMinor from "./NavMinor"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarData.navMain} />
        <NavMinor items={sidebarData.NavMinor} />
      </SidebarContent>

      <SidebarFooter>
        <SidebarContent>
          <NavTrivia />
        </SidebarContent>
      </SidebarFooter>
    </Sidebar>
  )
}

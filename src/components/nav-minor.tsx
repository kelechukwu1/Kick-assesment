import type { IconType } from "react-icons";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useLocation, Link } from "react-router-dom"

export function NavMinor({
  items,
}: {
  items: {
    name: string
    url: string
    icon: IconType
  }[]
}) {
  const location = useLocation();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
          const isActive = location.pathname === `/${item.url}`;
          return (
            <Link key={item.name} to={item.url}>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className={`cursor-pointer hover:bg-[#34112f] p-5 ${isActive ? "bg-[#34112f]" : ""}`}>
                  <a href={item.url}>
                    <item.icon className="text-gray-500" />
                    <span className="text-gray-500">{item.name}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </Link>
          )
        }
        )}
      </SidebarMenu>
    </SidebarGroup>
  )
}

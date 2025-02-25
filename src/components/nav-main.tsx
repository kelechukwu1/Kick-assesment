import type { IconType } from "react-icons";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useLocation, Link } from "react-router-dom"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: IconType
  }[]
}) {
  const location = useLocation();
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
          const isActive = location.pathname === `/${item.url}`;
          return (
            <Link key={item.title} to={item.url}>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip={item.title} className={`cursor-pointer p-5 flex items-center hover:bg-[#34112f] ${isActive ? "bg-[#34112f]" : ""}`}>
                  {item.icon && <item.icon className="text-gray-500" />}
                  <span className="text-gray-500">{item.title}</span>
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

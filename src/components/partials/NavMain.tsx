
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
    icon?: string
  }[]
}) {
  const location = useLocation();
  const normalizeUrl = (url: string) =>
    url.startsWith("/") ? url : `/${url}`;
  return (
    <SidebarGroup>
      <SidebarMenu className="space-y-3">
        {items.map((item) => {
          const isActive = location.pathname === normalizeUrl(item.url);
          return (
            <Link key={item.title} to={normalizeUrl(item.url)}>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip={item.title} className={`cursor-pointer p-5 flex items-center hover:bg-[#34112f] ${isActive ? "bg-[#FF197533]" : ""}`}>
                  {item.icon && <img
                    src={item?.icon}
                    alt="Home Icon"
                    width={20}
                    height={20}
                    className="text-gray-500"
                  />}
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

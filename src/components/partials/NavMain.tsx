import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useLocation, Link } from "react-router-dom"

/**
 * NavMain Component
 * 
 * Renders a navigation menu with sidebar items. Each item includes a title, URL, and optional icon.
 * The active menu item is highlighted based on the current route.
 * 
 * @param {Object} props - Component props.
 * @param {Array} props.items - An array of navigation items, each containing a title, URL, and optional icon.
 * 
 * @returns {JSX.Element} - A sidebar navigation menu with dynamic active state highlighting.
 */
const NavMain = ({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: string
  }[]
}) => {
  const location = useLocation();

  return (
    <SidebarGroup>
      <SidebarMenu className="space-y-1 w-[90%] mx-auto">
        {items.map((item) => {
          const isActive = location.pathname === item.url || (item.url !== "/" && location.pathname.startsWith(`/${item.url.split("/")[0]}`));
          return (
            <Link key={item.title} to={item.url}>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip={item.title} className={`cursor-pointer rounded-[12px] pl-3 w-full h-[50px] flex items-center hover:bg-[#34112f] ${isActive ? "bg-[#FF197533]" : ""}`}>
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
export default NavMain
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useLocation, Link } from "react-router-dom"



const NavMinor = ({
  items,
}: {
  items: {
    name: string
    url: string
    icon: string
  }[]
}) => {
  const location = useLocation();

  return (
    <SidebarGroup>
      <SidebarMenu className="space-y-1 w-[90%] mx-auto">
        {items.map((item) => {
          const isActive = location.pathname === `/${item.url}` || location.pathname.startsWith(`/${item.url.split("/")[0]}`) || location.pathname.startsWith(`/${item.url}`)
          return (
            <SidebarMenuItem key={item.name} >
              <SidebarMenuButton asChild
                className={`rounded-[12px] pl-3 w-full h-[50px] cursor-pointer hover:bg-[#34112f] p-5 ${isActive ? "bg-[#34112f]" : ""}`}
              >
                <Link to={item.url}>
                  <img
                    src={item?.icon}
                    alt="Home Icon"
                    width={20}
                    height={20}
                    className="text-gray-500"
                  />
                  <span className="text-gray-500">{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        }
        )}
      </SidebarMenu>
    </SidebarGroup>
  )
}
export default NavMinor
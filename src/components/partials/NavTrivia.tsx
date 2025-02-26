import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "../ui/button"
import { Gamepad2 } from "lucide-react"
import { Link } from "react-router-dom"

export function NavTrivia() {
  const { state } = useSidebar()
  return (
    <SidebarGroup>
      <SidebarMenu>
        <SidebarMenuItem>
          {state === "collapsed" ? (
            <SidebarMenuButton tooltip={"Play Trivia"} className="bg-[#FF1975] flex justify-center items-center cursor-pointer">
              <Link to="/trivia-of-the-day">
                <Gamepad2 size={20} className="text-white" />
              </Link>
            </SidebarMenuButton>
          ) : (
            <div className="bg-[#fefefe] space-y-2.5 p-[0.7rem] rounded-2xl text-center py-3 mb-3 md:mb-0">
              <h4 className="text-black font-semibold text-sm">Trivia of the day</h4>
              <p className="text-xs text-gray-500">Play trivia of the day to gain extra points and coins</p>
              <Link to="/trivia-of-the-day">
                <Button size={"sm"} className="text-white w-full bg-[#FF1975] hover:bg-[#d7306b] transition all duration-300 cursor-pointer font-semibold text-xs">Play trivia</Button>
              </Link>
            </div>
          )}
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}

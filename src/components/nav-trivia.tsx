import {
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "./ui/button"

export function NavTrivia() {

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="bg-[#fefefe] space-y-5 p-3 rounded-lg text-center py-5">
          <h4 className="text-black font-semibold text-sm">Trivia of the day</h4>
          <p className="text-xs text-gray-700">Play trivia of the day to gain extra points and coins</p>
          <Button size={"sm"} className="bg-[#e83873] cursor-pointer font-semibold text-xs">Play trivia</Button>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

import {
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "./ui/button"

export function NavTrivia() {

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="bg-[#fefefe] space-y-2.5 p-[0.7rem] rounded-2xl text-center py-3">
          <h4 className="text-black font-semibold text-sm">Trivia of the day</h4>
          <p className="text-xs text-gray-500">Play trivia of the day to gain extra points and coins</p>
          <Button size={"sm"} className="w-full bg-[#e83873] hover:bg-[#d7306b] transition all duration-300 cursor-pointer font-semibold text-xs">Play trivia</Button>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

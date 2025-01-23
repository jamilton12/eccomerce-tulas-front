import { Menu } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import Link from "next/link"
import { MenuList } from "./menuList"

export const MenuMovile = () => {
  return (
    <Popover >
      <PopoverTrigger >
        <Menu />
      </PopoverTrigger>

      <PopoverContent >
        <MenuList className="lg:hidden" />
      </PopoverContent>
    </Popover>
  )
}
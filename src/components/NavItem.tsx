"use client"

import { PRODUCT_CATEGORIES } from "@/config"
import { Button } from "./ui/button"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { lusitana } from "./ui/fonts"

type Category = typeof PRODUCT_CATEGORIES[number]

interface NavItemProps {
   category: Category,
   handleOpen: () => void
   isOpen: boolean
   isAnyOpen: boolean
}

const NavItem = ({
   isAnyOpen,
   category,
   handleOpen,
   isOpen
}: NavItemProps) => {
   return (
      <div className={`${lusitana.className} flex`}>
         <div className="relative flex items-center">
         <Button onClick={handleOpen} variant={isOpen ? 'secondary' : 'ghost'}>
         {category.label}
         <ChevronDown className={cn("h-4 w-4 transition-all text-muted-foreground", {
            "-rotate-180" : isOpen
         })} />
         </Button>
         </div>

      </div>
   )
}

export default NavItem
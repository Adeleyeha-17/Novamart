export const PRODUCT_CATEGORIES = [
   {
      label: "UI Kits",
      value: "ui_kits" as const,
      featured: [
         {
            name: "Editor picks",
            href: "#",
            imageSrc: "/nav/ui-kits/mixed.jpg"
         },{
            name: "New Arrivals",
            href: "#",
            imageSrc: "/nav/ui-kits/purple.jpg"
         },
         {
            name: "Best Seller",
            href: "#",
            imageSrc: "/nav/ui-kits/blue.jpg"
         }
      ]
   },{
      label: "Icons",
      value: "icons" as const,
      featured: [
         {
            name: "Favorite Icon Picks",
            href: "#",
            imageSrc: "/nav/icons/new.jpg"
         },{
            name: "New Arrivals",
            href: "#",
            imageSrc: "/nav/icons/picks.jpg"
         },
         {
            name: "Bestselling Icons",
            href: "#",
            imageSrc: "/nav/icons/bestsellers.jpg"
         }
      ]
   }
]
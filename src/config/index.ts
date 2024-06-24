export const PRODUCT_CATEGORIES = [
   {
      label: "Kits",
      value: "kits" as const,
      featured: [
         {
            name: "Editor picks",
            href: "#",
            imageSrc: "/nav/kits/all-nike.jpg"
         },{
            name: "New Arrivals",
            href: "#",
            imageSrc: "/nav/kits/customer2.jpg"
         },
         {
            name: "Best Seller",
            href: "#",
            imageSrc: "/nav/kits/black-nike.jpg"
         }
      ]
   },{
      label: "Kicks",
      value: "kicks" as const,
      featured: [
         {
            name: "Favorite Footware Picks",
            href: "#",
            imageSrc: "/nav/footware/big-shoe1.png"
         },{
            name: "New Arrivals",
            href: "#",
            imageSrc: "/nav/footware/big-shoe2.png"
         },
         {
            name: "Bestselling Footware",
            href: "#",
            imageSrc: "/nav/footware/big-shoe3.png"
         }
      ]
   }
]
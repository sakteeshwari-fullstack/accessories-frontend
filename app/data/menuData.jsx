import { ShoppingCart, User, Heart } from "lucide-react";

export const menuData = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    submenu: [
      { label: "Certificates", href: "/about/certificates" },
    ],
  },
  {
    label: "Services",
    submenu: [
      {
        label: "Belts",
        href: "/services/belts",
        image: "/productbelts.jpg",
      },
      {
        label: "Wallets",
        href: "/services/wallets",
        image: "/productwallets.jpg",
      },
      {
        label: "Bags",
        href: "/services/bags",
        image: "/productbags.jpg",
      },
      {
        label: "Washed Leather Labels",
        href: "/services/washed-leather-labels",
        image: "/productwashing-labels.jpg",
      },
      {
        label: "Corporate Gifting",
        href: "/services/corporate-gifting",
        image: "/productcorporate-gifting.jpg",
      },
    ],
  },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },

  // 🔽 Added Icon-based Links
  {
  
    href:"/login",
    icon: "User",
  },
  {
    
    href: "/wishlist",
    icon: "Heart",
  },
  {
    
    href: "/cart",
    icon: "ShoppingCart",
  },
  
];

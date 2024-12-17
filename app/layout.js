import { FloatingNav } from "./components/ui/floating-navbar";
import "./globals.css";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { RiInformation2Line } from "react-icons/ri";
import { GrBusinessService } from "react-icons/gr";

export default function RootLayout({ children }) {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: (
        <RiInformation2Line className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Services",
      link: "#services",
      icon: (
        <GrBusinessService className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <html lang="en">
      <body>
        <FloatingNav navItems={navItems} />
        {children}
      </body>
    </html>
  );
}

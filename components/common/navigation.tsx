"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

export function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="flex items-center gap-4">
      {links.map((link) => (
        <Button
          key={link.href}
          variant={pathname === link.href ? "secondary" : "ghost"}
        >
          <Link href={link.href}>{link.label}</Link>
        </Button>
      ))}
      <ModeToggle />
    </nav>
  );
}

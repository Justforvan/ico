"use client";

import { History, Home, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: Home },
    { href: "/history", icon: History },
    { href: "/account", icon: User },
  ];

  return (
    <div className="w-full grid grid-cols-3 bg-blue-800 text-white p-6 text-center fixed bottom-0">
      {navItems.map(({ href, icon: Icon }) => (
        <Link key={href} href={href} className="flex flex-col items-center">
          <Icon
            className={`text-center ${
              pathname === href ? "text-yellow-400" : "text-white"
            }`}
          />
        </Link>
      ))}
    </div>
  );
}

"use client";

import { History, Home, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/history", label: "History", icon: History },
    { href: "/account", label: "Account", icon: User },
  ];

  return (
    <div className="w-full grid grid-cols-3 text-black border border-gray-300 p-3 text-center fixed bottom-0">
      {navItems.map(({ href, label, icon: Icon }) => (
        <Link key={href} href={href} className="flex flex-col items-center">
          <Icon
            className={`text-center ${
              pathname === href ? "text-yellow-600" : ""
            }`}
          />
          <span
            className={`text-center text-sm ${
              pathname === href ? "text-yellow-600" : ""
            }`}
          >
            {label}
          </span>
        </Link>
      ))}
    </div>
  );
}

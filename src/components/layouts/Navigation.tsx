"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import styles from "@/styles/layouts/Navigation.module.css";

const links = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/works", label: "WORKS" },
];

const Navigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu className="fixed top-[10px] right-[10px] z-10">
      <NavigationMenuList>
        {links.map((link) => (
          <NavigationMenuItem key={link.href} className="relative mr-2 md:mr-3">
            <NavigationMenuLink asChild>
              <Link href={link.href} className="text-[11px] md:text-[14px]">
                {link.label}
                {pathname === link.href ? (
                  <motion.div
                    className={styles.underline}
                    layoutId="underline"
                    id="underline"
                  />
                ) : null}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;

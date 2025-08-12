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
    <NavigationMenu className="fixed top-[10px] right-[10px] z-50 mix-blend-exclusion">
      <NavigationMenuList>
        {links.map((link) => (
          <NavigationMenuItem key={link.href} className="relative mr-2 md:mr-3">
            <NavigationMenuLink asChild>
              <Link
                href={link.href}
                className="text-[clamp(0.75rem,2.5vw,1.2rem)]"
              >
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

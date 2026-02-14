"use client";

import { useState } from "react";

import { usePathname } from "next/navigation";
import { motion } from "motion/react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import styles from "@/styles/layouts/Navigation.module.css";

import { useSharedState } from "@/context/SharedStateProvider";
import Link from "next/link";

const links = [
  { href: "/", label: "HOME", id: "cafe" },
  { href: "/about", label: "ABOUT", id: "art_eggs" },
  { href: "/works", label: "WORKS", id: "10_room" },
];

const tick = (time: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), time));

const Navigation = () => {
  const pathname = usePathname();

  const [clickable, setClickable] = useState(true);

  const { setSelectedId } = useSharedState();

  const toggleLockMenu = async () => {
    if (!clickable) return;
    setClickable(false);
    await tick(1700);
    setClickable(true);
  };

  const { setLeavingTo } = useSharedState();

  const goTo = (target: string) => {
    const isCurrent = pathname !== target;
    if (!isCurrent) return;
    setLeavingTo(target);
    toggleLockMenu();
  };

  return (
    <NavigationMenu className="fixed top-[10px] right-[10px] z-50">
      <NavigationMenuList>
        {links.map((link) => (
          <NavigationMenuItem
            key={link.href}
            className="relative mr-2 md:mr-3"
            style={{
              transition: "opacity 0.6s ease",
              opacity: clickable ? 1 : 0.5,
              pointerEvents: clickable ? "auto" : "none",
            }}
          >
            <NavigationMenuLink asChild>
              <Link
                href={link.href}
                className="text-[clamp(0.75rem,2.5vw,1.2rem)]"
                onClick={(e) => {
                  e.preventDefault();
                  goTo(link.href);
                  setSelectedId(link.id);
                }}
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

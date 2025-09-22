"use client";

import React, { useState } from "react";
import Link from "next/link";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Box } from "lucide-react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import { ScrollArea } from "@/components/ui/scroll-area";

import styles from "@/styles/layouts/Navigation.module.css";

import { useSharedState } from "@/context/SharedStateProvider";

const links = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/works", label: "WORKS" },
];

const list = [
  { id: "art_eggs", ttl: "目玉焼き", img: "egg.png" },
  { id: "10_room", ttl: "10日でBlender4入門", img: "room.png" },
  { id: "ice", ttl: "アイス", img: "02_ice.png" },
];

const tick = (time: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), time));

const Navigation: React.FC = () => {
  const pathname = usePathname();

  const [clickable, setClickable] = useState(true);

  const toggleLockMenu = async () => {
    if (!clickable) return;
    setClickable(false);
    await tick(1700);
    setClickable(true);
  };

  const { setSelectedId, setLeavingTo } = useSharedState();

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
              <button
                className="text-[clamp(0.75rem,2.5vw,1.2rem)]"
                onClick={() => goTo(link.href)}
              >
                {link.label}
                {pathname === link.href ? (
                  <motion.div
                    className={styles.underline}
                    layoutId="underline"
                    id="underline"
                  />
                ) : null}
              </button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>

      <div className="fixed top-[10px] md:top-[30px] left-[10px] md:left-[30px] z-30">
        <Popover>
          <PopoverTrigger className="inline-flex items-center justify-center rounded-full border border-white p-2 data-[state=open]:bg-white/10 data-[state=open]:shadow-inner transition w-14 h-14">
            <Box className="w-6 h-6 text-white" />
          </PopoverTrigger>

          <PopoverContent
            sideOffset={20}
            side="bottom"
            align="end"
            className="p-[0] z-30"
          >
            <ScrollArea className="h-40 text-neutral-200 rounded-md border">
              <Table className="bg-black/20 backdrop-blur-sm">
                <TableBody>
                  {list.map(({ id, ttl, img }) => (
                    <TableRow key={id} onClick={() => setSelectedId(id)}>
                      <TableCell>
                        <Image
                          src={`/list/${img}`}
                          width={150}
                          height={150}
                          alt="Picture of the author"
                          loading="eager"
                        />
                      </TableCell>
                      <TableCell className="text-ls md:text-lg">
                        {ttl}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </PopoverContent>
        </Popover>
      </div>
    </NavigationMenu>
  );
};

export default Navigation;

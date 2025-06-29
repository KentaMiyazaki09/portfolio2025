"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "motion/react";

import styles from "@/styles/layouts/Navigation.module.css";

const links = [
  { href: "/", label: "TOP" },
  { href: "/about", label: "ABOUT" },
  { href: "/works", label: "WORKS" },
];

const Navigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-[20px] right-[10px] z-10">
      <ul>
        {links.map((link) => (
          <li key={link.href} className="relative">
            <Link href={link.href} className="text-lx pl-2 font-semibold">
              {link.label}
              {pathname === link.href ? (
                <motion.div
                  className={styles.underline}
                  layoutId="underline"
                  id="underline"
                />
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

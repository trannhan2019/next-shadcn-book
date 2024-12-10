"use client";

import LogoImage from "@/assets/img/logo.png";
import { motion } from "motion/react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useWindowScroll } from "@uidotdev/usehooks";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const dataMenu = [
  {
    title: "HOME",
    url: "/",
  },
  {
    title: "BOOKS",
    url: "/book",
  },
  {
    title: "E-BOOKS",
    url: "/e-book",
  },
];

export default function Header() {
  const [{ y }] = useWindowScroll();

  return (
    <div
      className={cn(
        "absolute left-0 right-0 top-0 z-10 h-[85px]",
        y !== null && y > 90 && "sticky animate-scroll-show bg-white"
      )}
    >
      <div className="container mx-auto h-full px-5">
        <div className="flex h-full w-full justify-between">
          {/* logo-------------------- */}
          <div className="my-4 max-w-[85px]">
            <a href="index-book-shop.html">
              <Image src={LogoImage} alt="img" />
            </a>
          </div>
          {/* logo---------------------- */}

          {/* menu--------------------------- */}
          <ul className="hidden items-center justify-between gap-6 md:flex">
            {dataMenu.map((item) => (
              <li key={item.title} className="group flex h-full items-center">
                <Link
                  className="p-4 text-sm font-semibold group-hover:text-orange-500"
                  href={item.url}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          {/* menu ------------------------*/}
          {/* Mobile menu ------------------------*/}
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <VisuallyHidden.Root>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Choose a menu</SheetDescription>
              </VisuallyHidden.Root>
              <ul className="flex flex-col p-4">
                {dataMenu.map((item) => (
                  <li className="group p-2" key={item.title}>
                    <Link
                      className="p-4 text-sm font-semibold group-hover:text-orange-500"
                      href={item.url}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
          {/* Mobile menu -----------------------------*/}
        </div>
      </div>
    </div>
  );
}

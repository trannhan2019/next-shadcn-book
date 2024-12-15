"use client";

import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useWindowScroll } from "@uidotdev/usehooks";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ChevronDown, Lock, Menu, Power, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

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
  const [sheetOpen, setSheetOpen] = useState(false);
  const [{ y }] = useWindowScroll();

  return (
    <div
      className={cn(
        "absolute left-0 right-0 top-0 z-10 h-[65px] md:h-[85px]",
        y !== null && y > 90 && "sticky animate-scroll-show bg-white shadow-md",
      )}
    >
      <div className="container mx-auto h-full px-5">
        <div className="flex h-full w-full justify-between">
          {/* logo-------------------- */}
          <div className="my-2 w-[150px] md:w-[200px]">
            <AspectRatio ratio={17 / 5}>
              <Image
                src="/img/A3.png"
                alt="logo"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
              />
            </AspectRatio>
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
          {/* auth*/}
          <div className="hidden items-center md:flex">
            {true ? (
              <NavUser
                setSheetOpen={setSheetOpen}
                user={{ email: "test@gmail.com", name: "test" }}
              />
            ) : (
              <Button asChild size="lg">
                <Link href="/login">
                  <Lock className="mr-2 size-4" />
                  Login
                </Link>
              </Button>
            )}
          </div>

          {/* Mobile menu ------------------------*/}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger className="md:hidden">
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <VisuallyHidden.Root>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Choose a menu</SheetDescription>
              </VisuallyHidden.Root>
              <ul className="mb-3 flex flex-col p-4">
                {dataMenu.map((item) => (
                  <li key={item.title} className="group p-2">
                    <Link
                      className="p-4 text-sm font-semibold group-hover:text-orange-500"
                      href={item.url}
                      onClick={() => setSheetOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              {true ? (
                <div className="flex justify-end pr-3">
                  <NavUser
                    setSheetOpen={setSheetOpen}
                    user={{ email: "test@gmail.com", name: "test" }}
                  />
                </div>
              ) : (
                <Button asChild size="lg" className="w-full">
                  <Link href="/login">
                    <Lock className="mr-2 size-4" />
                    Login
                  </Link>
                </Button>
              )}
            </SheetContent>
          </Sheet>
          {/* Mobile menu -----------------------------*/}
        </div>
      </div>
    </div>
  );
}

function NavUser({
  user,
  setSheetOpen,
}: {
  user: { email: string; name: string };
  setSheetOpen: (open: boolean) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="flex items-center gap-2 focus-visible:outline-none">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="text-left">
          <p className="text-sm font-normal">{user.name}</p>
          <p className="text-sm font-normal text-gray-500">{user.email}</p>
        </div>
        <ChevronDown className="ml-auto size-4" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-[200px]">
        <DropdownMenuItem
          onClick={() => {
            setSheetOpen(false);
            setOpen(false);
          }}
        >
          <User className="mr-2 size-4" />
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => {
            setSheetOpen(false);
            setOpen(false);
          }}
        >
          <User className="mr-2 size-4" />
          <Link href="/profile">Profile</Link>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => {
            setSheetOpen(false);
            setOpen(false);
          }}
        >
          <Settings className="mr-2 size-4" />
          <Link href="/settings">Settings</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => setSheetOpen(false)}>
          <Power className="mr-2 size-4" color="red" />
          <Link href="/">Logout</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

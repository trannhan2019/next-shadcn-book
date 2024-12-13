import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SidebarLogo() {
  return (
    <Link href="/">
      <div className="w-[150px] md:w-[200px]">
        <AspectRatio ratio={17 / 5}>
          <Image
            src="/img/A3.png"
            alt="logo"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
        </AspectRatio>
      </div>
    </Link>
  );
}

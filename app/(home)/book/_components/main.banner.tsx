"use client";

import BgSlide from "@/assets/img/slider-bg-2.jpg";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function MainBanner() {
  return (
    <div
      className={cn(
        "flex min-h-screen items-center bg-[url('/img/slider-bg-2.jpg')] bg-cover bg-center bg-no-repeat "
      )}
    >
      <div className="container mx-auto px-5">
        <div className="flex w-full items-center justify-center lg:w-6/12 lg:justify-start">
          <div className="flex flex-col items-center lg:items-start">
            <motion.span
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-7 flex w-fit items-center bg-[#62ab00] px-3 py-1 text-white"
            >
              BEST AVAILABLE
            </motion.span>

            <motion.h1
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-7 text-center text-5xl font-light text-black/80 md:text-left md:text-7xl"
            >
              BOOKS <span className="font-semibold">COLLECTION</span>
            </motion.h1>

            <Button asChild variant="link">
              <Link className="text-xl font-semibold text-black/80" href="/">
                Book now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

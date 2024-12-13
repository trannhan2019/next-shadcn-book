"use client";

import { ChevronUp } from "lucide-react";
import { useWindowScroll } from "@uidotdev/usehooks";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ScrollTop() {
  const [{ y }, scrollTo] = useWindowScroll();

  return (
    <Button
      variant="outline"
      onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
      size="icon"
      className={cn(
        "fixed bottom-4 right-4 hidden bg-orange-400 text-white hover:bg-orange-500 hover:text-white",
        y !== null && y > 200 && "flex",
      )}
    >
      <ChevronUp />
    </Button>
  );
}

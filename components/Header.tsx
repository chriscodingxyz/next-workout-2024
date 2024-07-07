import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Silkscreen } from "next/font/google";

const silkscreen = Silkscreen({ subsets: ["latin"], weight: "400" });

export default function Header() {
  return (
    <div className="flex p-1 justify-end border-b gap-2 bg-accent">
      <div className="flex-center">
        <span className={`${silkscreen.className} text-primary/90`}>
          cherrydub
        </span>
      </div>
      <Avatar className="border border-primary h-8 w-8">
        <AvatarImage className="" src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <ThemeToggle />
    </div>
  );
}

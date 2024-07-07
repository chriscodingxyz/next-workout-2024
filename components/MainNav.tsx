"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { mainNavigation } from "@/lib/data";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function MainNav() {
  const pathName = usePathname();

  console.log(pathName);

  return (
    <div className="flex justify-around gap-1 p-1">
      {mainNavigation.map((item, index) => {
        const IconComponent = Icons[item.icon];
        return (
          <section
            className={cn(
              "flex-grow border-2 border-dotted",
              pathName.includes(item.href) &&
                "bg-green-500 border-primary border-solid"
            )}
            key={index}
          >
            <Link
              href={item.href}
              key={index}
              className="flex-center-col py-1 gap-1"
            >
              <IconComponent size={18} />
              <span className="text-xs">{item.name}</span>
            </Link>
          </section>
        );
      })}
    </div>
  );
}

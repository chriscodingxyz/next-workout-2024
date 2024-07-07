"use client";

import { cn } from "@/lib/utils";
import {
  ArrowBigLeft,
  ArrowBigRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import React from "react";

export default function SlideCalendar({ currentDate }: any) {
  // alert(currentDate.toDateString());

  //sunday jul 07 2024

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const userStartWeek = "Mon";

  const userStartWeekIndex = days.indexOf(userStartWeek);

  const newDays = [
    ...days.slice(userStartWeekIndex),
    ...days.slice(0, userStartWeekIndex),
  ];

  //Sunday 0, Saturday 6
  const dayOfWeek = currentDate.getDay();

  //what actual number day is it
  const dateNumber = currentDate.getDate();

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  // alert(year + month + dateNumber);
  return (
    <div className="overflow-x-auto overflow-y-hidden  flex justify-around text-xs my-1 items-center">
      <ArrowBigLeft size={16} />
      {newDays.map((day, index) => (
        <div
          className={cn(
            " flex-center-col border-2 border-primary/10 p-1 w-10 border-dotted",
            day === days[dayOfWeek] &&
              "font-bold bg-green-500 border-primary border-solid"
          )}
        >
          <div>{day} </div>
          <div>
            {dateNumber === index + 1
              ? dateNumber
              : dateNumber - (dateNumber - index)}
          </div>
        </div>
      ))}
      <ArrowBigRight size={16} />
    </div>
  );
}

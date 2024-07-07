import SlideCalendar from "@/components/SlideCalendar";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function DatePage({ params }: { params: { date: string } }) {
  const { date } = params;
  const dateArr = date.split(" ");
  const dayName = dateArr[0];
  const month = dateArr[1];
  const day = dateArr[2];
  const year = dateArr[3];

  const currentDate = new Date();

  return (
    <div className="flex flex-col h-full">
      <div className="flex-shrink-0">
        {/* <Header /> */}
        <SlideCalendar
          currentDate={currentDate}
          datyName={dayName}
          month={month}
          day={day}
          year={year}
        />
      </div>
      <div className={`${inter.className} flex-grow overflow-auto text-xs p-4`}>
        this is the workout for {dayName} {month} {day} {year}
      </div>
    </div>
  );
}

import Header from "@/components/Header";
import SlideCalendar from "@/components/SlideCalendar";
import { redirect } from "next/navigation";
import React from "react";

export default function WorkoutPage() {
  // alert(currentDate.toDateString());
  const date = new Date().toDateString();
  const dateArr = date.split(" ");

  const dayName = dateArr[0];
  const month = dateArr[1];
  const day = dateArr[2];
  const year = dateArr[3];

  console.log("dateee =>>>>", date);
  //sunday jul 07 2024

  return redirect(`/main/workout/${month}-${day}-${year}`);
}

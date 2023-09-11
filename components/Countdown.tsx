"use client";

import { useState, useEffect } from "react";

const CalendarBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-11 w-9 rounded-md bg-gradient-to-tr from-white via-[#CA58FF] to-[#FFEBB9] p-[1px] shadow-[0.7px_-1.1px_3.6px_0px_rgba(248,169,108,1),0px_2.9px_3.6px_0px_rgba(255,255,255,0.25)] xl:h-[120px] xl:w-[100px] xl:rounded-xl xl:p-[2px] xl:shadow-[2px_-3px_10px_0px_rgba(248,169,108,1),0px_8px_10px_0px_rgba(255,255,255,0.25)]">
      <div className="flex h-full w-full items-center justify-center rounded-md bg-gradient-to-b from-[#32134A] to-[#573273] xl:rounded-xl">
        <div className="font-poppins text-2xl font-bold leading-none text-white drop-shadow-[0_1.5px_4px_rgba(249,190,212,0.50)] xl:text-6xl xl:leading-none xl:drop-shadow-[0_4px_10px_rgba(249,190,212,0.50)]">
          {children}
        </div>
      </div>
    </div>
  );
};

const Countdown = ({ date }: { date: Date }) => {
  // Countdown state (time left in miliseconds until event starts)
  const initialCountDown = date.getTime() - Date.now();
  const [countdown, setCountdown] = useState(
    initialCountDown > 0 ? initialCountDown : 0
  );

  // Calculated time left in days, hours, minutes, seconds
  const days = Math.floor(countdown / (24 * 60 * 60 * 1000));
  const daysRemainder = countdown % (24 * 60 * 60 * 1000);
  const daysTens = Math.floor(days / 10);
  const daysOnes = days % 10;

  const hours = Math.floor(daysRemainder / (60 * 60 * 1000));
  const hoursRemainder = daysRemainder % (60 * 60 * 1000);
  const hoursTens = Math.floor(hours / 10);
  const hoursOnes = hours % 10;

  const minutes = Math.floor(hoursRemainder / (60 * 1000));
  const minutesRemainder = hoursRemainder % (60 * 1000);
  const minutesTens = Math.floor(minutes / 10);
  const minutesOnes = minutes % 10;

  const seconds = Math.floor(minutesRemainder / 1000);
  const secondsTens = Math.floor(seconds / 10);
  const secondsOnes = seconds % 10;

  // useEffect to update countdown every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      const timeNow = Date.now();
      const timeEvent = date.getTime();
      if (timeNow < timeEvent) {
        setCountdown(timeEvent - timeNow);
      } else {
        setCountdown(0);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [date]);

  return (
    <time className="flex w-fit flex-col gap-2 xl:gap-6">
      {/* Countdown */}
      <div className="flex flex-row items-center gap-1 xl:gap-5">
        {/* Days */}
        <div className="flex flex-row gap-1 xl:gap-3">
          <CalendarBox>{daysTens}</CalendarBox>
          <CalendarBox>{daysOnes}</CalendarBox>
        </div>

        {/* : */}
        <div className="font-poppins text-2xl font-bold leading-none text-white xl:text-6xl xl:leading-none">
          :
        </div>

        {/* Hours */}
        <div className="flex flex-row gap-1 xl:gap-3">
          <CalendarBox>{hoursTens}</CalendarBox>
          <CalendarBox>{hoursOnes}</CalendarBox>
        </div>

        {/* : */}
        <div className="font-poppins text-2xl font-bold leading-none text-white xl:text-6xl xl:leading-none">
          :
        </div>

        {/* Minutes*/}
        <div className="flex flex-row gap-1 xl:gap-3">
          <CalendarBox>{minutesTens}</CalendarBox>
          <CalendarBox>{minutesOnes}</CalendarBox>
        </div>

        {/* : */}
        <div className="hidden font-poppins text-2xl font-bold leading-none text-white vsm:block xl:text-6xl xl:leading-none">
          :
        </div>

        {/* Secs */}
        <div className="hidden flex-row gap-1 vsm:flex xl:gap-3">
          <CalendarBox>{secondsTens}</CalendarBox>
          <CalendarBox>{secondsOnes}</CalendarBox>
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-row justify-between text-center font-poppins text-xl font-bold uppercase leading-none tracking-wider text-white xl:text-4xl xl:leading-none">
        <div className="w-[75px] xl:w-[210px]">DAYS</div>
        <div className="w-[75px] xl:w-[210px]">HOURS</div>
        <div className="w-[75px] xl:w-[210px]">MINS</div>
        <div className="hidden w-[75px] vsm:block xl:w-[210px]">SECS</div>
      </div>
    </time>
  );
};

export default Countdown;

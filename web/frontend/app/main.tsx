"use client";
import "../styles/globals.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import "dayjs/locale/ja";

export default function Main() {
  const [now, setNow] = useState("");
  useEffect(() => {
    dayjs.locale("ja");
    const timer = setInterval(() => {
      setNow(dayjs().format("YYYY年M月D日 HH時mm分ss秒"));
    }, 1000);
    setNow(dayjs().format("YYYY年M月D日 HH時mm分ss秒"));
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-red">
      <div className="relative flex items-center">
        <div className="absolute right-0 top-0 text-gray-500 pt-[172px] pr-[17px] text-[0.8rem] scale-x-[1.03] font-notojp tabular-nums proportional-nums">
          {now}
        </div>
        <Image
          src="/images/card-test.jpg"
          alt="image"
          width={395}
          height={1400}
          quality={100}
          priority
        />
      </div>
    </div>
  );
}

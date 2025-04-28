// export default function Main() {
//   return <div>Hello, Next.js!</div>;
// }
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Main() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <header className="w-full max-w-3xl mb-8">
        <h1 className="text-4xl font-bold text-center">Next.js テストページ</h1>
      </header>
      <div className="flex justify-center">
        <Image
          src="/images/card.jpg" // ← public/images/card.jpg は /images/card.jpg で参照
          alt="test"
          width={375} // 実ファイルの幅（px）に合わせてください
          height={1400} // 実ファイルの高さ（px）
          priority // ロードを優先
        />
      </div>
    </div>
  );
}

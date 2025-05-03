"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
// import { useBasicAuth } from "@/_hooks/UseBasicAuth";
// import { useIsMobile } from "@/_hooks/UseIsMobile";

export interface LoginProps {
  //   accessToken: string;
}
export default function Login({}: LoginProps) {
  //   useBasicAuth();
  const router = useRouter();
  //   const isMobile = useIsMobile();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    grant_type: "password",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = () => {
    setError(null);
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      if (
        formData.username == "kotarou30918@gmail.com" &&
        formData.password == "1226"
      ) {
        router.push("/main");
      } else {
        setError("正しいメールアドレスとパスワードを入力してください");
      }
    }, 1000);
  };
  return (
    <>
      <main className="flex justify-center items-start lg:items-center w-full min-h-screen bg-svg bg-gray-300 overflow-y-auto overflow-x-hidden z-0 p-4">
        <motion.div
          key="login"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
          className="flex flex-col justify-center items-center rounded-3xl bg-color-white-base shadow-right-bottom w-full lg:w-[1200px] h-auto min-h-auto lg:h-[750px] lg:min-h-[750px] bg-opacity-70"
        >
          <div className="flex flex-col justify-start items-center w-full lg:w-[1000px] lg:h-[580px] px-2 pt-14 lg:pt-0">
            <div className="flex w-full h-full p-1 lg:p-4">
              <div className="flex flex-col items-center rounded-3xl bg-color-white-base shadow-right-bottom border border-color-base w-full h-full py-8 px-8">
                <div className="flex justify-start items-end w-[95%] font-montserrat font-black text-xl text-color-base tracking-widest border-b border-color-base px-2 pt-2 mb-12">
                  ログイン.
                </div>
                <div className="flex flex-col w-4/5">
                  {error && (
                    <div className="flex py-1 text-red-500">{error}</div>
                  )}
                  <div className="flex py-1">メールアドレス</div>
                  <div className="flex w-full">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      inputMode="text"
                      value={formData.username}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          username: e.target.value,
                        })
                      }
                      placeholder=" "
                      autoComplete="off"
                      className="font-montserrat font-bold text-xs lg:text-sm text-color-base tracking-widest bg-color-white-base 
                                                        focus:outline-none border-2 rounded-md border-gray-300 w-full pt-4 pb-2 px-3 block peer"
                    />
                  </div>
                  <div className="flex py-4"></div>
                  <div className="flex py-1">パスワード</div>
                  <div className="flex w-full relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      maxLength={30}
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          password: e.target.value,
                        })
                      }
                      placeholder=" "
                      autoComplete="off"
                      className="font-montserrat font-bold text-sm lg:text-sm text-color-base tracking-widest bg-color-white-base 
                                                        focus:outline-none border-2 rounded-md border-gray-300 w-full pt-4 pb-2 px-3 block peer"
                    />
                  </div>
                </div>
                <div className="flex justify-center w-full pt-16 pb-8">
                  <button
                    type="submit"
                    disabled={isProcessing}
                    onClick={handleLogin}
                    className="px-16 lg:px-24 py-3 rounded-xl font-bold tracking-widest bg-black text-white disabled:opacity-50"
                  >
                    {isProcessing ? "ログイン中..." : "ログインする"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
}

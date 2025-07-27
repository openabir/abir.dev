import React from "react";
import ProfileImage from "@/components/ProfileImage";

export default function about() {
  return (
    <main>
      <div className="min-h-[200px]">
        <div>
          
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="inline-flex items-center p-4">
          <div className="flex-shrink-0 mr-5">
            <ProfileImage />
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-800">
              <p className="greeting">Hey, I&apos;m Birb (Abir Biswas) <span className="waving-hand">👋</span></p> 
            </div>
            <div className="mt-1 flex items-center space-x-2">
              <span className="block h-2.5 w-2.5 rounded-full bg-green-500"></span>
              <span className="text-sm text-slate-600">available for work</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex text-center justify-center">
        <div className="max-w-[550px] text-[1.1rem] text-left">
          <p>
            I&apos;m a creative web developer currently pursuing my B.Tech in CSE. I
            enjoy crafting clean UIs and building engaging user experiences with <br /> a strong attention to detail. 
            <br />
            <br />
            I&apos;m currently focusing on the following tech stacks:
          </p>
        </div>
      </div>
    </main>
  );
}
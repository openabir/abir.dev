import React from "react";

import Image from "next/image";

export default function Profile() {
  return (
    <>
      <div className="mb-5 mt-5 flex gap-5">
        <div className="relative inline-block">
          <div
            className="pointer-events-none relative size-[70px] select-none hover:saturate-[70%]"
            style={{ userSelect: "none" }}
          >
            <div className="absolute inset-1">
              <Image
                className="size-full rounded-full bg-muted-foreground/30 object-cover ring-2 ring-muted-foreground/50 ring-offset-2 ring-offset-background dark:hidden"
                alt="Profile"
                src="/images/profile.jpg"
                fill
              />
              <Image
                className="hidden size-full rounded-full bg-muted-foreground object-cover ring-2 ring-muted-foreground/50 ring-offset-2 ring-offset-background dark:block"
                alt="Profile"
                src="/images/profile-alt.jpg"
                fill
              />
            </div>
            <svg
              className="absolute inset-0 size-full"
              viewBox="0 0 100 100"
              style={{ transform: "rotate(-90deg)", opacity: 1 }}
            >
              <circle
                className="stroke-emerald-500 dark:stroke-green-500"
                cx="50"
                cy="50"
                r="46"
                fill="none"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="289.03"
                strokeDashoffset="289.03"
              />
            </svg>
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold text-xl tracking-tighter sm:text-2xl">
            Hey, I&apos;m OpenAbir (Abir Biswas)
            <span className="ml-1 inline-block origin-buttom-right waving-hand">
              👋
            </span>
          </h1>

          <a
            href="mailto:heyyabir@gmail.com"
            className="flex items-center gap-1.5"
          >
            <div className="size-2 rounded-full bg-green-500"></div>
            <div className="relative cursor-pointer overflow-hidden">
              <p className="group text-muted-foreground">
                <span className="group-hover:-translate-y-full flex flex-col border-b border-dashed transition-all duration-1000 ease-slow">
                  Available for work
                  <span className="invisible h-0">Let&apos;s talk</span>
                </span>
                <span className="group-hover:-translate-y-full absolute top-full flex items-center justify-center transition-all duration-1000 ease-slow">
                  Let&apos;s talk
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 size-4"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

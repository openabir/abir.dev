import React from "react";
import Image from "next/image";
import TechGrid from "@/components/TechGrid";
import MapComponent from "@/components/MapComponent";
// import ProfilePic from "@/components/ProfilePic";

export default function About() {
  return (
    <main className="relative mx-auto mt-6 max-w-xl px-6">
      <div>
        <section className="w-full h-full bg-background">
        {/* MAP COMPONENT DIV ⬇️ */}
          <div className="group relative h-48">
            <MapComponent />
          </div>

          {/* PROFILE PICTURE, NAME, AVAILABILITY ⬇️ */}
          <div className="opacity-100 transform-none">
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
                  Hello, I&apos;m Abir (Abir Biswas)
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
                          <rect
                            width="20"
                            height="16"
                            x="2"
                            y="4"
                            rx="2"
                          ></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                      </span>
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* ABOUT ME TEXT ⬇️ */}
          <div className=" opacity-100 transform-none">
            <p className="mb-4 text-sm">
              I&apos;m a creative web developer currently pursuing my B.Tech in
              CSE. <br /> I enjoy crafting clean UIs and building engaging user experiences <br /> with a strong attention to detail.
              <br />
            </p>
          </div>

          {
            /* TODO: Add text highlight upon hover on the profile image */
          }
          {/* TECH STACK ⬇️ */}
          <div className="opacity-100 transform-none">
            <div className=" relative my-6 grid cursor-none select-none grid-cols-4 gap-2 overflow-hidden bg-background">
              {/* <label className="group relative flex cursor-none flex-col items-center gap-3 rounded-lg border px-2 py-3 text-center shadow-2xs shadow-black/5 outline-offset-2 transition-colours hover:cursor-none has-data-[state=checked]:border-ring/30 has-data-[state=checked]:bg-accent sm:hover:bg-muted sm:has-data-[state=checked]:hover:bg-accent/70 sm:dark:hover:bg-muted/40 undefined"></label> */}
              <TechGrid />
            </div>
          </div>

          <div className=""></div>
        </section>
      </div>
    </main>
  );
}

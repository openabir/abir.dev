import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import MapComponent from "@/components/MapComponent";
import Profile from "@/components/Profile";
import AboutText from "@/components/About";
import { DockComponent } from "@/components/DockComponent";
import TechGrid from "@/components/TechGrid";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <div>
        <section className="w-full h-full rounded-2xl bg-background">
          <div className="group relative h-48">
            <MapComponent />
          </div>
          <div className="opacity-100 transform-none">
            <Profile />
          </div>
          <div className=" opacity-100 bg-transparent">
            <AboutText />
          </div>

          {/* TODO: Add text highlight upon hover on the profile image */}
          {/* TECH STACK ⬇️ */}
          <div className="opacity-100 transform-none">
            <TechGrid />
            <Link
              href="/tech-stack"
              className="text-sm text-blue-500 hover:underline hover:text-blue-700 transition-colors duration-200"
            >
              more...
            </Link>
          </div>

          <div className="h-100px">
            <Footer />
          </div>
        </section>
        <div className="fixed bottom-5 left-0 right-0 flex justify-center z-999">
          <DockComponent />
        </div>
      </div>
    </>
  );
}

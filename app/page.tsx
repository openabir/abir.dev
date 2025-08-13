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

      <div className="bg-[#0a0a0a] p-1">
            <MapComponent />
            <Profile />
            <AboutText />
            <TechGrid />
            <Link
              href="/tech-stack"
              className="text-sm text-white hover:underline">
              more...
            </Link>
            <Footer />
      </div>
    </>
  );
}

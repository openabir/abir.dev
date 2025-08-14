import React from "react";
import { Separator } from "@radix-ui/react-separator";
import { Navbar } from "@/components/Navbar";
import MapComponent from "@/components/MapComponent";
import Profile from "@/components/Profile";
import Projects from "@/components/projects";
import AboutText from "@/components/About";
import TechGrid from "@/components/TechGrid";
import Footer from "@/components/Footer";

export default function About() {
  return (<>
    <Navbar />
    <main className="container bg-[#0a0a0a]">
      <MapComponent />
      <Profile />
      <AboutText />
      <TechGrid />
      <Projects />
      <div className="my-8">
        <Separator />
      </div>
      <Footer />
    </main>
  </>
  );
}

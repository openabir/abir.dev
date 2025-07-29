import React from "react";
import { ModeToggle } from "@/components/ModeToggle";

export const Navbar = () => {
  return (
    <aside className="mb-10 tracking-tight ">
      <div className="lg:sticky lg:top-20">
        <nav className="relative flex items-center justify-between pt-8 md:relative md:overflow-auto">
          <a href="#" className="pl-2 first:mr-auto">
            <div className="hidden font-bold font-mono text-2xl sm:block">
              AB1r B
            </div>
            <div>
              <h1 className="block font-bold font-mono text-2xl sm:hidden">
                AB
              </h1>
            </div>
          </a>

          <div className="flex items-center pr-2">
            <ModeToggle />
          </div>
        </nav>
      </div>
    </aside>
  );
};

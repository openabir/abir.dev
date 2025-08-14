import React from "react";
import Link from "next/link";
import { Github, Linkedin, Moon, Sun } from "lucide-react";
import { ICONS } from "../lib/icons";

export const Navbar = () => {
  return (
    <header className="flex justify-between items-center mb-10 mt-5">
      <Link href="/">
        <span className="hidden Work_Sans font-bold font-mono text-2xl sm:block">
          A8IR
        </span>
        <span className="block font-bold font-mono text-2xl sm:hidden">8</span>
      </Link>

      <nav className="flex items-center gap-4">
        <a
          href="#"
          className="text-slate-500 hover:text-slate-900 transition-all"
          title="GitHub"
        >
          <Github className="size-6" />
        </a>
        <a
          href="#"
          className="text-slate-500 hover:text-slate-900 transition-all"
          title="LinkedIn"
        >
          <Linkedin className="size-6" />
        </a>
        <a
          href="#"
          className="text-slate-500 hover:text-slate-900 transition-all"
          title="Discord"
        >
          <ICONS.discord className="size-6 text-[#5865F2] hover: text-white transition-all" />
        </a>
        <button
          className="text-slate-500 hover:text-slate-900 transition-all"
          title="Toggle Dark Mode"
        >
          <Moon className="size-6" />
        </button>
      </nav>
    </header>
  );
};

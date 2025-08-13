import React from "react";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { ICONS } from "../lib/icons";

export const Navbar = () => {
  return (
    <header className="flex justify-between items-center mb-5 mt-5">
      <Link href="/">
        <span className="hidden font-bold font-mono text-2xl sm:block">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

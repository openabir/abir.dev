"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ICONS,
  technologies,
  type IconId,
  type Technology,
} from "@/utils/icons";

// Utility to join class names conditionally
const cn = (...classes: (string | boolean | undefined | null)[]) =>
  classes.filter(Boolean).join(" ");

// Props for the card
interface TechnologyCardProps extends Technology {
  isSelected: boolean;
  onToggle: (id: IconId) => void;
}

// Technology Card
const TechnologyCard: React.FC<TechnologyCardProps> = ({
  id,
  name,
  color,
  isSelected,
  onToggle,
}) => {
  const [hovered, setHovered] = useState(false);
  const Icon = ICONS[id];

  return (
    <div
      data-state={isSelected ? "checked" : "unchecked"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onToggle(id)}
      className={cn(
        "group flex flex-col items-center justify-center gap-2 rounded-sm border text-center shadow-sm transition-colors cursor-pointer",
        "px-4 py-5 md:px-2 md:py-3"
      )}
    >
      {Icon && (
        <span
          className="transition-transform sm:group-hover:-translate-y-1"
          style={{
            filter: hovered ? `drop-shadow(0 0 8px ${color})` : undefined,
          }}
        >
          <Icon size={24} color={isSelected ? color : "#a1a1aa"} />
        </span>
      )}
      <p className="hidden md:block text-[12px] text-zinc-400 leading-none group-data-[state=checked]:text-white">
        {name}
      </p>
    </div>
  );
};

// Main Grid
export default function TechGrid() {
  const [selected, setSelected] = useState<Set<IconId>>(new Set());

  const toggleSelection = (id: IconId) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className="grid grid-cols-4 sm:grid-cols-4 gap-2 select-none">
      {technologies.map((tech) => (
        <TechnologyCard
          key={tech.id}
          {...tech}
          isSelected={selected.has(tech.id)}
          onToggle={toggleSelection}
        />
      ))}
    </div>
  );
}

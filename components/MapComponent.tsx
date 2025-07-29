"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import Image from "next/image";

export default function MapComponent() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const cloudRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style:
        "https://api.maptiler.com/maps/streets/style.json?key=8UDx6ldtoonNYL6fflPA",
      center: [88.486738, 22.719253],
      zoom: 14,
      attributionControl: false,
    });

    const pulseDot = document.createElement("div");
    pulseDot.className =
      "relative flex items-center justify-center w-3 h-3 z-30";

    const ping = document.createElement("span");
    ping.className = "ping-slow";
    pulseDot.appendChild(ping);

    const core = document.createElement("span");
    core.className =
      "relative inline-flex w-2 h-2 rounded-full bg-green-500 z-30";
    pulseDot.appendChild(core);

    new maplibregl.Marker({ element: pulseDot })
      .setLngLat([88.486738, 22.719253])
      .addTo(map.current);
  }, []);

  useEffect(() => {
    if (cloudRef.current && mapContainer.current) {
      const randBottom = 10 + Math.random() * 40;
      cloudRef.current.style.bottom = `${randBottom}px`;
      cloudRef.current.style.animation = "cloudMove 60s linear infinite";
    }
  }, []);

  return (
    <div ref={mapContainer} className="relative h-[200px] w-full overflow-hidden rounded-tr-2xl rounded-tl-2xl">
      {/* Map layer */}
      <div className="absolute inset-0 z-0" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-10 hidden dark:block dark:bg-black/60" />

      {/* Fade bottom overlay */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-transparent to-transparent dark:from-black/80 dark:via-transparent dark:to-transparent z-20" />

      {/* Cloud */}
      <div
        ref={cloudRef}
        className="pointer-events-none absolute w-64 h-64 z-30"
      >
        <Image
          src="/images/cloud.webp"
          alt="cloud"
          fill
          className="object-contain blur-sm scale-150 opacity-60"
        />
      </div>
    </div>
  );
}

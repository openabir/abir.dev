"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import Image from "next/image";

// Clock Component
const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-xs font-mono px-2 py-1 rounded-lg z-20">
      {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
    </div>
  );
};

export default function MapComponent() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const cloudRef = useRef<HTMLDivElement>(null);

  // Main useEffect for map initialization and cleanup
  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    const apiKey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY;
    if (!apiKey) {
      console.error("MapTiler API key is not configured in .env.local");
      return;
    }

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${apiKey}`,
      center: [88.487335, 22.717726],
      zoom: 14,
      attributionControl: false,
      interactive: false, // Disable map interaction for a lighter experience
    });

    // Create a custom pulsing marker
    const pulseDot = document.createElement("div");
    pulseDot.className =
      "relative flex items-center justify-center w-3 h-3 z-30";
    pulseDot.innerHTML = `
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
    `;

    new maplibregl.Marker({ element: pulseDot })
      .setLngLat([88.487335, 22.717726])
      .addTo(map.current);

    // Cleanup function to remove the map instance when the component unmounts
    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  // useEffect for cloud animation
  useEffect(() => {
    if (cloudRef.current) {
      const randBottom = 10 + Math.random() * 40;
      cloudRef.current.style.bottom = `${randBottom}px`;
      cloudRef.current.style.animation = "cloudMove 60s linear infinite";
    }
  }, []);

  return (
    <div
      ref={mapContainer}
      className="relative h-[200px] w-full overflow-hidden rounded-tr-2xl rounded-tl-2xl"
    >
      {/* Map is rendered here by MapLibre */}

      {/* Clock Display */}
      <Clock />

      {/* Fade bottom overlay for a seamless merge */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent z-20" />

      {/* Cloud */}
      <div
        ref={cloudRef}
        className="pointer-events-none absolute w-64 h-64 z-10"
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

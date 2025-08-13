"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { socialLinks } from "@/lib/social-links";
import SocialLink from "@/components/SocialLink";
import ProfileName from "@/components/ui/ProfileName";


export default function Profile(): JSX.Element {
  const [isImageSwapped, setIsImageSwapped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const circleRef = useRef<SVGCircleElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const animationStartRef = useRef<number | null>(null);

  const RING_DURATION = 1500;
  const FADE_DURATION = 300;
  const STROKE_TOTAL = 289.03;

  const startRingAnimation = (reverse = false, elapsed = 0) => {
    if (!circleRef.current || !svgRef.current) return;

    const circle = circleRef.current;
    const svg = svgRef.current;
    const targetOffset = reverse ? STROKE_TOTAL : 0;
    const duration = reverse ? elapsed : RING_DURATION;

    // Reset opacity instantly
    svg.style.transition = "none";
    svg.style.opacity = "1";

    if (reverse) {
      const currentOffset = STROKE_TOTAL * (1 - elapsed / RING_DURATION);
      circle.style.transition = "none";
      circle.style.strokeDashoffset = currentOffset.toString();
      void circle.getBoundingClientRect();
    } else {
      circle.style.transition = "none";
      circle.style.strokeDashoffset = STROKE_TOTAL.toString();
      void circle.getBoundingClientRect();
    }

    // Animate strokeDashoffset
    circle.style.transition = `stroke-dashoffset ${duration}ms linear`;
    circle.style.strokeDashoffset = targetOffset.toString();
  };

  const handleMouseEnter = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);

    startRingAnimation(false);
    animationStartRef.current = performance.now();

    timeoutRef.current = setTimeout(() => {
      setIsImageSwapped((prev) => !prev);

      // Fade out ring
      if (svgRef.current) {
        svgRef.current.style.transition = `opacity ${FADE_DURATION}ms ease`;
        svgRef.current.style.opacity = "0";
      }

      // After fade-out, reset ring stroke
      setTimeout(() => {
        if (circleRef.current) {
          circleRef.current.style.transition = "none";
          circleRef.current.style.strokeDashoffset = STROKE_TOTAL.toString();
        }
        if (svgRef.current) {
          svgRef.current.style.transition = "none";
          svgRef.current.style.opacity = "1";
        }
        setIsAnimating(false);
      }, FADE_DURATION);
    }, RING_DURATION);
  };

  const handleMouseLeave = (): void => {
    if (!isAnimating) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    const now = performance.now();
    const start = animationStartRef.current;
    if (start === null) {
      setIsAnimating(false);
      return;
    }

    const elapsed = Math.min(now - start, RING_DURATION);

    startRingAnimation(true, elapsed);

    setTimeout(() => {
      setIsAnimating(false);
    }, elapsed);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <div className="mb-5 mt-5 flex gap-5">
        <div
          className="relative inline-block"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="relative size-[70px] select-none"
            style={{ userSelect: "none" }}
          >
            <div className="absolute inset-1">
              <Image
                className={`size-full rounded-full object-cover ring-2 ring-muted-foreground/50 ring-offset-2 ring-offset-background transition-opacity duration-500 ${
                  isImageSwapped ? "opacity-0" : "opacity-100"
                }`}
                alt="Profile"
                src="/images/profile.jpg"
                fill
                priority
              />
              <Image
                className={`absolute top-0 left-0 size-full rounded-full object-cover ring-2 ring-muted-foreground/50 ring-offset-2 ring-offset-background transition-opacity duration-500 ${
                  isImageSwapped ? "opacity-100" : "opacity-0"
                }`}
                alt="Alternate Profile"
                src="/images/profile-alt.jpg"
                fill
                priority
              />
            </div>

            <svg
              ref={svgRef}
              className="absolute inset-0 size-full"
              viewBox="0 0 100 100"
              style={{ transform: "rotate(-90deg)", opacity: 1 }}
            >
              <circle
                ref={circleRef}
                cx="50"
                cy="50"
                r="46"
                fill="none"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={STROKE_TOTAL}
                strokeDashoffset={STROKE_TOTAL}
                className="stroke-emerald-500 dark:stroke-green-500"
              />
            </svg>
          </div>
        </div>
        <div className="space-y-2">
          <ProfileName name="Abir Biswas" />

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
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </span>
              </p>
            </div>
            <div className="flex flex-wrap ml-18 gap-6 overflow-x-auto">
              {socialLinks.map((link) => (
                <SocialLink
                  key={link.name}
                  href={link.href}
                  name={link.name}
                  icon={link.icon}
                />
              ))}
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

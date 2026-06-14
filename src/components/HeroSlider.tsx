"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";

interface Slide {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  image: string;
}

interface HeroSliderProps {
  slides: Slide[];
  lang: string;
}

export default function HeroSlider({ slides, lang }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  // Touch swipe support state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const isTouchDevice = useRef(false);

  const slideDuration = 5000; // 5 seconds per slide
  const tickRate = 50; // Progress bar updates every 50ms
  const isRtl = lang === "ar";

  // Autoplay and progress bar interval logic
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
          return 0;
        }
        return prev + (100 / (slideDuration / tickRate));
      });
    }, tickRate);

    return () => clearInterval(interval);
  }, [isHovering, currentIndex, slides.length]);

  // Reset progress bar when slide is manually changed
  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    handleSlideChange(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    handleSlideChange(prevIndex);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    isTouchDevice.current = true;
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipeLeft = distance > 50;
    const isSwipeRight = distance < -50;

    if (isRtl) {
      if (isSwipeLeft) handlePrev();
      if (isSwipeRight) handleNext();
    } else {
      if (isSwipeLeft) handleNext();
      if (isSwipeRight) handlePrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section 
      className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden bg-slate-950 select-none group/slider"
      onMouseEnter={() => {
        if (!isTouchDevice.current) {
          setIsHovering(true);
        }
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out z-10 ${
                isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
            >
              {/* Slide Background Image */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className={`object-cover object-center w-full h-full transition-transform duration-[7000ms] ease-out ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                />
                {/* Premium Dark overlay/mask for maximum text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent dark:from-slate-950 dark:via-slate-950/85 dark:to-transparent rtl:bg-gradient-to-l opacity-85" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20 opacity-40" />
              </div>

              {/* Text content details container */}
              <div className="container mx-auto px-4 md:px-6 h-full flex flex-col justify-center relative z-20">
                <div className="max-w-3xl text-left rtl:text-right flex flex-col items-start rtl:items-start select-text">
                  
                  {/* Badge */}
                  <div className="inline-flex items-center rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold text-brand bg-brand/10 mb-6 border border-brand/20 backdrop-blur-md animate-fade-in">
                    <Sparkles className="h-3.5 w-3.5 me-2 animate-pulse" />
                    {slide.badge}
                  </div>
                  
                  {/* Title */}
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-white mb-6 leading-[1.15] md:leading-[1.15]">
                    {slide.title}{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-teal-300">
                      {slide.titleHighlight}
                    </span>
                  </h1>
                  
                  {/* Subtitle */}
                  <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
                    {slide.subtitle}
                  </p>
                  
                  {/* CTA Link */}
                  <Link 
                    href={`/${lang}${slide.ctaLink}`}
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand hover:bg-brand-dark rounded-xl transition-all shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30 hover:scale-[1.02] active:scale-[0.98] group"
                  >
                    {slide.ctaText}
                    {isRtl ? (
                      <ArrowLeft className="ms-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                    ) : (
                      <ArrowRight className="ms-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    )}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>


      {/* Bottom pagination dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                isActive ? "w-8 bg-brand" : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>

      {/* Sleek timer progress bar at the very bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-950/50 z-20">
        <div 
          className="h-full bg-brand transition-all ease-linear"
          style={{ 
            width: `${progress}%`,
            transitionDuration: isHovering ? "0ms" : `${tickRate}ms`
          }}
        />
      </div>
    </section>
  );
}

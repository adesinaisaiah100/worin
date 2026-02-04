"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = useMemo(
    () => [
      {
        kind: "image" as const,
        mediaSrc: "/pic3.jpeg",
        mediaAlt: "Testimonial",
        rating: 5,
        quote:
          "From the very first visit, we knew our mum was in safe hands. The carers are kind, attentive, and treat her like family",
        author: "Helped Mother",
      },
      {
        kind: "video" as const,
        mediaSrc: "/videos/video4.mp4",
        mediaAlt: "Donation outreach video",
        rating: 5,
        quote:
          "Seeing your team show up with dignity and genuine care meant everything. The children felt seen, and we felt supported.",
        author: "Orphanage Home Partner",
        subText: "Donation outreach • Essentials and care supplies",
      },
      {
        kind: "video" as const,
        mediaSrc: "/videos/video3.mp4",
        mediaAlt: "Orphanage donation video",
        rating: 5,
        quote:
          "You didn’t just donate — you connected with the children, listened, and brought hope. That kindness stays with them.",
        author: "Community Volunteer",
        subText: "Orphanage visit • Presence, love, and support",
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  return (
    <section className="w-full py-20 px-8 flex justify-center bg-[#FDFBF7]">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8 items-center justify-center">
        
        {/* Left Arrow - Desktop only */}
        <button
          type="button"
          onClick={() =>
            setActiveIndex((prev) =>
              prev === 0 ? testimonials.length - 1 : prev - 1
            )
          }
          aria-label="Previous testimonial"
          className="hidden md:flex p-3 rounded-full bg-[#C5A059] text-[#2E1A47] hover:bg-[#FDFBF7] transition-colors shadow-lg shrink-0"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Image Section */}
        <div className="relative flex justify-center shrink-0">
          <div className="relative w-72 h-116 md:w-80 md:h-[450px]">
            {/* Outline Arch - Behind */}
            <div className="absolute top-4 left-4 w-full h-full border-2 border-[#C5A059] rounded-t-full rounded-b-none pointer-events-none" />
            
            {/* Image Container - Arch */}
            <div className="relative w-full h-full rounded-t-full rounded-b-none overflow-hidden shadow-xl bg-gray-200 z-10">
              {active.kind === "image" ? (
                <Image
                  src={active.mediaSrc}
                  alt={active.mediaAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              ) : (
                <video
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src={active.mediaSrc} type="video/mp4" />
                </video>
              )}
            </div>
          </div>
        </div>

        {/* Right Arrow - Desktop only */}
        <button
          type="button"
          onClick={() =>
            setActiveIndex((prev) =>
              prev === testimonials.length - 1 ? 0 : prev + 1
            )
          }
          aria-label="Next testimonial"
          className="hidden md:flex p-3 rounded-full bg-[#C5A059] text-[#2E1A47] hover:bg-[#FDFBF7] transition-colors shadow-lg shrink-0"
        >
          <ChevronRight size={32} />
        </button>

        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 max-w-md">
          <h2 className="text-4xl md:text-5xl font-nunito font-bold text-[#2E1A47]">
            Testimonials
          </h2>

          <div className="flex gap-1">
            {Array.from({ length: active.rating }).map((_, starIndex) => (
              <Star
                key={starIndex}
                className="w-8 h-8 fill-[#E53935] text-[#E53935]"
              />
            ))}
          </div>

          <blockquote className="text-xl md:text-2xl text-[#2E1A47] font-nunito leading-relaxed font-medium">
            &quot;{active.quote}&quot;
          </blockquote>

          {"subText" in active && active.subText ? (
            <p className="text-sm md:text-base text-[#2E1A47]/70 font-nunito font-semibold">
              {active.subText}
            </p>
          ) : null}

          <p className="text-lg font-bold text-[#2E1A47]">
            - {active.author}
          </p>
          
          {/* Mobile Navigation arrows + Dots for all */}
          <div className="flex items-center gap-4 mt-4" aria-label="Testimonial navigation">
            {/* Left Arrow - mobile only */}
            <button
              type="button"
              onClick={() =>
                setActiveIndex((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )
              }
              aria-label="Previous testimonial"
              className="md:hidden p-2 rounded-full bg-[#C5A059] text-[#2E1A47] hover:bg-[#FDFBF7] transition-colors shadow-md"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`View testimonial ${idx + 1}`}
                  aria-current={idx === activeIndex}
                  className={
                    "w-2.5 h-2.5 rounded-full cursor-pointer transition-colors " +
                    (idx === activeIndex
                      ? "bg-[#2E1A47]"
                      : "bg-[#D1D5DB] hover:bg-[#C5A059]")
                  }
                />
              ))}
            </div>

            {/* Right Arrow - mobile only */}
            <button
              type="button"
              onClick={() =>
                setActiveIndex((prev) =>
                  prev === testimonials.length - 1 ? 0 : prev + 1
                )
              }
              aria-label="Next testimonial"
              className="md:hidden p-2 rounded-full bg-[#C5A059] text-[#2E1A47] hover:bg-[#FDFBF7] transition-colors shadow-md"
            >
              <ChevronRight size={24} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="w-full py-20 px-8 flex justify-center bg-[#FDFBF7]">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-34 items-center">
        {/* Left Image Section */}
        <div className="relative flex justify-center md:justify-end pr-6">
          <div className="relative w-72 h-116 md:w-80 md:h-[450px]">
            {/* Outline Arch - Behind */}
            <div className="absolute top-4 left-4 w-full h-full border-2 border-[#C5A059] rounded-t-full rounded-b-none pointer-events-none" />
            
            {/* Image Container - Arch */}
            <div className="relative w-full h-full rounded-t-full rounded-b-none overflow-hidden shadow-xl bg-gray-200 z-10">
               <Image
                src="/pic3.jpeg" // Using this as it likely contains a person
                alt="Testimonial"
                fill
                className="object-cover"
              /> 
            </div>
          </div>
        </div>

        {/* Right Text Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-nunito font-bold text-[#2E1A47]">
            Testimonials
          </h2>

          <div className="flex gap-1">
             {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-8 h-8 fill-[#E53935] text-[#E53935]" /> 
             ))}
             {/* Using a reddish color #E53935 similar to the reference image for the stars, assuming these are the 'red stars' from the image. If strictly strictly brand, would use gold, but '5 star kind of rating' usually implies the visual style. The user said 'i will give reference', which likely implies copying the look. */}
          </div>

          <blockquote className="text-xl md:text-2xl text-[#2E1A47] font-nunito leading-relaxed font-medium">
            &quot;From the very first visit, we knew our mum was in safe hands. The carers are kind, attentive, and treat her like family&quot;
          </blockquote>

          <p className="text-lg font-bold text-[#2E1A47]">
             - Cao Yu
          </p>
          
          {/* Pagination dots */}
           <div className="flex gap-2 mt-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2E1A47] cursor-pointer"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#D1D5DB] cursor-pointer hover:bg-[#C5A059]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#D1D5DB] cursor-pointer hover:bg-[#C5A059]"></span>
          </div>

        </div>
      </div>
    </section>
  );
}

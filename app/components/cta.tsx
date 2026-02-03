import React from 'react';

type CTAProps = {
  onHelpClick?: () => void;
};

export default function CTA({ onHelpClick }: CTAProps) {
  return (
    <section className="w-full py-24 px-6 bg-[#2E1A47] text-center flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background decoration - optional subtle gradient or pattern to make it less flat if needed */}
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8 z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-nunito font-bold text-[#FDFBF7] leading-tight tracking-wide">
          When you need us, we&apos;re here with heart, help, and hands you can trust.
        </h2>
        
        <button
          type="button"
          onClick={onHelpClick}
          className="bg-[#FFB81C] text-[#2E1A47] px-12 py-4 rounded-full text-xl font-bold hover:bg-[#ffcf5c] hover:scale-105 transition-all duration-300 shadow-lg mt-4"
        >
          HELP
        </button>

        <p className="text-[#FDFBF7]/80 text-sm md:text-base max-w-2xl mt-6 font-medium">
          Reach out today and let us create a care plan that fits your life, your needs, and your peace of mind
        </p>
      </div>
    </section>
  );
}

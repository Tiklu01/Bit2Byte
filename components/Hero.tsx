import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export function Hero() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-4 relative z-20 font-bold tracking-tight">
        Bit 2 Byte
      </h2>
      <h3 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-2xl lg:text-3xl font-sans py-1 md:py-2 relative z-20 font-bold tracking-tight">
        The Official Coding Community of GNIT
      </h3>
      {/* Hide this paragraph on screens smaller than 'md' */}
      <p className="hidden md:block max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Get the best advice from our experts, including veterans in the industry,
        peers, mentors, take your coding & netoworking skills to the next level.
      </p>
    </BackgroundLines>
  );
}

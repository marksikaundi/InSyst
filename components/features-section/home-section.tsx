"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomeSection() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/try-now");
  };
  const handleContribute = () => {
    router.push("/contribute");
  };

  return (
    <div className="min-h-screen  text-black relative overflow-hidden">
      <div className="container mx-auto px-4 pt-16 md:pt-24 pb-[300px] sm:pb-[400px] md:pb-40 relative z-10">
        {/* Announcement Banner */}
        <div className="inline-flex mb-8 md:mb-12">
          <a
            href="#"
            className="text-xs md:text-sm bg-black text-white/90 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/10 hover:border-white/20 transition-colors"
          >
            Announcing our Series A{" "}
            <ArrowRight className="inline-block ml-2 h-3 md:h-4 w-3 md:w-4" />
          </a>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-6 md:mb-8">
            Tool for developers
          </h1>
          <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
            <p className="text-lg md:text-xl text-black">
              The best way to web audit instead of shipping with bugs.
            </p>
            <p className="text-lg md:text-xl text-black">
              Report is delivered direct to your email of your choice.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-stretch sm:items-center">
            <Button
              onClick={handleRedirect}
              size="lg"
              className="bg-black text-white hover:bg-black hover:text-white"
            >
              Try now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              onClick={handleContribute}
              size="lg"
              className="bg-white text-black hover:bg-white hover:text-black"
            >
              Contribute <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Cube Image */}
      <div className="absolute bottom-0 left-1/2 md:top-1/2 md:right-0 md:left-auto transform -translate-x-1/2 md:-translate-y-1/2 md:translate-x-1/4 w-full md:w-auto">
        <Image
          src="/pl.svg"
          alt="WebAudit Cube"
          width={600}
          height={600}
          className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] object-contain opacity-30 md:opacity-100"
          priority
        />
      </div>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Features() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/try-now");
  };
  const handleContribute = () => {
    router.push("/contribute");
  };

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center text-center px-4">
      <div className="mb-16">
        <Image
          src="/placeholder.svg"
          alt="WebAudit Logo"
          width={80}
          height={80}
          className="mx-auto mb-8"
        />
        <h1 className="text-white text-5xl md:text-7xl font-medium mb-4 tracking-tight">
          Now Audit <span className="italic">just</span> works
        </h1>
        <p className="text-black text-lg md:text-xl max-w-2xl mx-auto mb-8">
          WebAudit is the modern audit platform that you&apos;ve been waiting
          for. It&apos;s fast, reliable, and packed with features that
          you&apos;ll love.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button
            onClick={handleRedirect}
            size="lg"
            className="bg-black text-white hover:bg-black rounded-full px-8"
          >
            Try now
          </Button>
          <Button
            onClick={handleContribute}
            variant="link"
            size="lg"
            className="text-black hover:text-black"
          >
            Contribute →
          </Button>
        </div>
      </div>
    </div>
  );
}

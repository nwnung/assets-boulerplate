"use client";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-white">
      <span className="text-sm font-medium bg-gray-100 px-3 py-1 rounded-full mb-4">
        🔥 New: filter by revenue & technology
      </span>
      <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
        Your game &&
        <span className="text-gray-400"> Your rules</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mt-4">
        Pweet is the tool for freelancers and small teams who want to get
        organized without relying on complex or expensive platforms. Simple
        productivity. No limits. No extra costs.
      </p>
      <div className="mt-6 flex flex-col md:flex-row gap-4">
        <Button className="bg-black text-white px-6 py-3 rounded-full">
          Early Bird Access ($9) →
        </Button>
      </div>
      <p className="text-sm text-gray-400 mt-8">Made with @jonaanw</p>
    </section>
  );
};

export default Hero;
